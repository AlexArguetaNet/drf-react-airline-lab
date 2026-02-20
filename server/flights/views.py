from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import *

# Get all of the flights
class FLightsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        flights = Flight.objects.select_related("origin", "destination", "aircraft").all()
        serialized_flights = FlightSerializer(flights, many=True)

        return Response(serialized_flights.data)
    
# Get a single flight by its ID
class SingleFLightView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, id): 
        flight = get_object_or_404(Flight, pk=id)
        serialized_flight = FlightSerializer(flight, many=False)

        return Response(serialized_flight.data)       