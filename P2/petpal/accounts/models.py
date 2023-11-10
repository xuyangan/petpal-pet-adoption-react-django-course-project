from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class PetUser(AbstractUser):
    shelter_name = models.CharField(
        max_length=255,
        null=True,
        blank=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
    