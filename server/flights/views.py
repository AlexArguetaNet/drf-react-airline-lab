from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import *

# Get all of the flights
class FlightsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        flights = Flight.objects.select_related("origin", "destination", "aircraft").all()
        serialized_flights = FlightSerializer(flights, many=True)

        return Response(serialized_flights.data)
    
# Get a single flight by its ID
class SingleFlightView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, id): 
        flight = get_object_or_404(Flight, pk=id)
        serialized_flight = FlightSerializer(flight, many=False)

        return Response(serialized_flight.data)     

# Add or Delete a flight from the user's list
class UserModifyFlights(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, id):
        user = request.user
        flight = get_object_or_404(Flight, pk=id)
        user.flights.add(flight)
        serialized_flight = FlightSerializer(flight, many=False)

        return Response(serialized_flight.data)

# Get all of the flights from the user's list    
class UserFlights(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        flights = user.flights.select_related("origin", "destination", "aircraft").all()

        serialized_flights = FlightSerializer(flights, many=True)

        return Response({"flights": serialized_flights.data})
    
