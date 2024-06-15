from django.db import models

class Home(models.Model):
    name = models.CharField(max_length=100)
    job = models.CharField(max_length=100)
    job2 = models.CharField(max_length=100)
    about = models.CharField(max_length=500)
    years_of_experience = models.PositiveIntegerField()
    project_completed = models.PositiveIntegerField()
    email = models.EmailField()
    logo = models.ImageField(upload_to='portfolio_images/')
    image = models.ImageField(upload_to='portfolio_images/')
    clients = models.PositiveIntegerField()  # This field should be numeric
    whatsapp= models.URLField(max_length=500)
    twitter= models.URLField(max_length=500)
    telegram= models.URLField(max_length=500)
    linkedin= models.URLField(max_length=500)
    cv= models.FileField(upload_to='portfolio_images/')
    phone_number= models.CharField(max_length=100)
    address= models.CharField(max_length=500)

    def __str__(self):
        return self.name



class Service(models.Model):
    title = models.CharField(max_length=100)
    number = models.PositiveIntegerField()
    description = models.TextField()
    detail_url = models.URLField()
    icon_class = models.CharField(max_length=50, default='flaticon-up-right-arrow')  # Optional: if you use different icons

    def __str__(self):
        return self.title

class Education(models.Model):
    degree = models.CharField(max_length=100)  # Degree or course title
    institution = models.CharField(max_length=100)  # Name of the institution
    location = models.CharField(max_length=100, blank=True, null=True)  # Optional location
    start_date = models.CharField(max_length=50)  # Flexible field for the start date or range
    end_date = models.CharField(max_length=50, blank=True, null=True)  # Optional end date

    def __str__(self):
        return f"{self.degree} at {self.institution}"

class Experience(models.Model):
    title = models.CharField(max_length=100)  # Position title
    company = models.CharField(max_length=100)  # Company or organization
    location = models.CharField(max_length=100)  # Location of the job/experience
    description = models.TextField(blank=True, null=True)  # Optional description of the role
    start_date = models.CharField(max_length=50)  # You can use CharField for flexible date ranges (e.g., "2022 - Present")
    end_date = models.CharField(max_length=50, blank=True, null=True)  # Optional end date


    def __str__(self):
        return f"{self.title} at {self.company}"



class Skill(models.Model):
    name = models.CharField(max_length=100)  # Name of the skill
    proficiency = models.IntegerField()  # Proficiency percentage
    image = models.ImageField(upload_to='portfolio_images/')
    def __str__(self):
        return f"{self.name} ({self.proficiency}%)"


# Model for Portfolio Category
class Category(models.Model):
    name = models.CharField(max_length=50, help_text='Name of the category (e.g., Apps, Branding)')
    slug = models.SlugField(unique=True, help_text='URL-friendly identifier for the category')

    def __str__(self):
        return self.name

# Model for Portfolio
class Portfolio(models.Model):
    title = models.CharField(max_length=100, help_text='Title of the portfolio project')
    category = models.ForeignKey(Category, related_name='portfolios', on_delete=models.CASCADE, help_text='Category of the project')
    description = models.TextField(help_text='Short description of the project')
    image = models.ImageField(upload_to='portfolios/images/', help_text='Image representing the project')
    detail_url = models.URLField(blank=True, help_text='URL to the project details (optional)')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']







from ckeditor.fields import RichTextField
class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    content = RichTextField()
    author= models.CharField(max_length= 100)
    image = models.ImageField(upload_to='portfolio_images/')
    category = models.ForeignKey(Category, related_name='blogs', on_delete=models.CASCADE)
    thumbnail = models.ImageField(upload_to='blog_thumbnails/')
    date = models.DateTimeField() 
    
    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date']  # Order by most recent by default

from django.db import models
from django.utils import timezone
import uuid
class Contact(models.Model):
    unique_id = models.CharField(max_length=20, editable=False, unique=True, blank=True)  # Custom ID field
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    message = models.TextField()

    def save(self, *args, **kwargs):
        if not self.unique_id:
            today = timezone.now().strftime('%Y%m%d')
            prefix = 'CM/' + today
            count = Contact.objects.filter(unique_id__startswith=prefix).count() + 1
            self.unique_id = f'{prefix}-{count:04d}'  # Unique ID: CM/YYYYMMDD-XXXX
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.full_name} - {self.unique_id}"
