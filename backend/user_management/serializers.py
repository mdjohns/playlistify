from rest_framework import serializers
from user_management.models import *
from user_management.validators import *


class GuestUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuestUser
        fields = (
            'display_name',
            'join_code'
        )
        extra_kwargs = {
            'join_code': {
                'validators': [GuestJoinCodeExists()]
            }

        }