from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    imageBase64 = models.ImageField(blank=True)