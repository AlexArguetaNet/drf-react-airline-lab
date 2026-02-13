from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Airport(models.Model):
    code = models.CharField(max_length=3)
    city = models.CharField(max_length=64)

    def __str__(self):
        return f"({self.code}) {self.city}"
    
class Flight(models.Model):
    origin = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="departures")
    destination = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="arrivals")
    duration = models.IntegerField()
    passengers = models.ManyToManyField(User, blank=True, related_name="flights")
    price = models.IntegerField()

    def __str__(self):
        return f"Flight from {self.origin} to {self.destination}"