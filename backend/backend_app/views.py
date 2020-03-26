from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView

from rest_framework.response import Response
import requests
from backend.user_settings import CLIENT_ID, CLIENT_SECRET

class Test(APIView):
    def get(self, *args, **kwargs):
        payload = {
            "message": "this was fetched from a Django REST endpoint!"
        }
        return Response(data=payload)
