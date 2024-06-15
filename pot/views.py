from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Home, Service, Experience, Education, Skill, Category, Portfolio, Blog

from django.views.generic import DetailView
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from .forms import ContactForm  # Make sure you have created this form as described in the previous steps

def home(request):
    # Fetch data for the home page
    home_instance = Home.objects.first()  # Assuming there is only one Home instance
    services = Service.objects.all()
    experiences = Experience.objects.all()
    educations = Education.objects.all()
    skills = Skill.objects.all()
    categories = Category.objects.all()  # Fetch all categories
    portfolios = Portfolio.objects.all()[:10]  # Fetch up to 10 portfolios
    blogs = Blog.objects.order_by('-date')[:4]  # Fetch the 4 most recent blog posts

    success_message = None  # Initialize the success message

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            contact = form.save()  # Save the form data to the database

            # Send email notification
            send_mail(
                subject=f'New Contact Form Submission: {contact.full_name}',
                message=(
                    
                    f'You have received a new contact form submission.\n\n'
                    f'id: {contact. unique_id}\n'
                    f'Full Name: {contact.full_name}\n'
                    f'Email: {contact.email}\n'
                    f'Phone Number: {contact.phone_number}\n'
                    f'Message:\n{contact.message}'
                ),
                #from_email=contact.email,
                from_email='dareadebayo42@gmail.com',  # Replace with your "from" email address
                recipient_list=['dareadebayo42@gmail.com'],  # Replace with your email address
                fail_silently=False,
            )
            success_message = 'Your message has been sent successfully!'  # Set the success message
            return redirect('home')  # Redirect to the home page to prevent re-submission on refresh
    else:
        form = ContactForm()  # Create an empty form for GET requests

    # Context for rendering the template
    context = {
        'home': home_instance,
        'services': services,
        'experiences': experiences,
        'educations': educations,
        'skills': skills,
        'categories': categories,
        'portfolios': portfolios,
        'blogs': blogs,
        'form': form,  # Include the contact form in the context
        'success_message': success_message,  # Include the success message in the context
    }

    return render(request, 'home.html', context)




class BlogDetailView(DetailView):
    model = Blog
    template_name = 'details.html'
    context_object_name = 'blog'
    
    def get_object(self, queryset=None):
        return get_object_or_404(Blog, slug=self.kwargs.get('slug'))
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        
        context['other_posts'] = Blog.objects.exclude(slug=self.kwargs.get('slug')).order_by('-date')
        return context





