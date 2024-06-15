from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['full_name', 'email', 'phone_number', 'message']
        widgets = {
            'full_name': forms.TextInput(attrs={'placeholder': 'Full name'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Email address'}),
            'phone_number': forms.TextInput(attrs={'placeholder': 'Phone number'}),
            'message': forms.Textarea(attrs={'placeholder': 'Message', 'rows': 10}),
        }