from rest_framework import serializers
from .models import *

class AirportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airport
        fields = ["id", "code", "city"]

class FlightSerializer(serializers.ModelSerializer):

    origin = AirportSerializer(read_only=True)
    destination = AirportSerializer(read_only=True)

    class Meta:
        model = Flight
        fields = ["id", "origin", "destination", "duration"]