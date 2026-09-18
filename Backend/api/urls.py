from django.urls import path
from .views import contact_inquiry, set_csrf_token

urlpatterns = [
    path('set-csrf/', set_csrf_token, name='set_csrf'),
    path('contact/', contact_inquiry, name='contact_inquiry'),
]