import uuid, random, string
from django.db import models
from django.contrib.auth.models import AbstractUser


class HostUser(AbstractUser):
    spotify_access_token = models.CharField(max_length=255, blank=True)
    spotify_refresh_token = models.CharField(max_length=255, blank=True)
    spotify_playlist_id = models.CharField(max_length=255, blank=True)


class GuestUser(models.Model):
    user_id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4())
    display_name = models.CharField(max_length=50, unique=True)
    join_code = models.CharField(max_length=4)


class Event(models.Model):
    code_length = 4

    def generate_join_code(self, code_length):
        letters = string.ascii_lowercase
        return ''.join(random.choice(letters) for i in range(code_length))

    event_id = models.UUIDField(primary_key=True, blank=True, unique=True, default=uuid.uuid4())
    hosted_by = models.ForeignKey('HostUser', on_delete=models.CASCADE, related_name="hosted_by")
    join_code = models.CharField(max_length=code_length, unique=True, default=generate_join_code(code_length))
