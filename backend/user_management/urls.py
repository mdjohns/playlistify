from django.urls import path
from django.urls import include, path
from user_management.views import *

urlpatterns = [
    path('register_host', RegisterHostView.as_view(), name='register_host')
]