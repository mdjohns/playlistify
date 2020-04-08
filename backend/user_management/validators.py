from rest_framework import serializers
from user_management.models import *


class GuestJoinCodeExists(object):
    def __call__(self, code):
        join_code_exists = Event.objects.all().filter(join_code=code).count()

        if not join_code_exists:
            raise serializers.ValidationError('Event does not exist')