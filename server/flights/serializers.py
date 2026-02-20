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

    # Dynamic Fields
    duration = serializers.SerializerMethodField()
    final_price = serializers.SerializerMethodField()
    tax_applied = serializers.SerializerMethodField()

    class Meta:
        model = Flight
        fields = ["id", "origin", "destination", "price", "final_price", "tax_applied","duration", "aircraft"]

    def get_price_with_tax(self, price):
        tax_rate = 1.07
        total = price * tax_rate
        return round(total, 2)

    # Function to convert duration from  just minutes to hours and minutes
    def get_duration(self, obj):
        hours = obj.duration // 60
        minutes = obj.duration % 60
        return f"{hours}h {minutes}m"
    
    def get_final_price(self, obj):
        return f"{self.get_price_with_tax(obj.price): .2f}"
    
    def get_tax_applied(self, obj):
        price_after_tax = self.get_price_with_tax(obj.price)
        return f"{price_after_tax - obj.price: .2f}"
