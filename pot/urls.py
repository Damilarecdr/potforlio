from django.urls import path
from . import views 
#from .views import contact_view, contact_success_view
from .views import BlogDetailView# Import the views from the current directory (app-level URLs)

urlpatterns = [
    path('', views.home, name='home'), # Add your URL patterns here
    #path('contact/', contact_view, name='contact'),
    path('blog/<slug:slug>/', BlogDetailView.as_view(), name='blog_detail'),




    #path('contact/', contact_view, name='contact'),
    #path('success/', contact_success_view, name='contact_success'),


   
]
