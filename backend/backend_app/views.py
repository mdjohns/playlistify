from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView

from rest_framework.response import Response
import requests
from backend.user_settings import CLIENT_ID, CLIENT_SECRET


