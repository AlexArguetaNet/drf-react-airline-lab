from rest_framework import serializers
from .models import *

class AircraftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aircraft
        fields = "__all__"

class AirportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airport
        fields = ["id", "code", "city"]

class FlightSerializer(serializers.ModelSerializer):

    origin = AirportSerializer(read_only=True)
    destination = AirportSerializer(read_only=True)
    aircraft = AircraftSerializer(read_only=True)

    # Class will call get_duration function to assign value
    duration = serializers.SerializerMethodField()

    class Meta:
        model = Flight
        fields = ["id", "origin", "destination", "price", "duration", "aircraft"]

    # Function to convert duration from  just minutes to hours and minutes
    def get_duration(self, obj):
        hours = obj.duration // 60
        minutes = obj.duration % 60
        return f"{hours}h {minutes}m"