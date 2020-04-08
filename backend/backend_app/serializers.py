from rest_framework import serializers


class RegisterHostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['name', ]