from django.contrib import admin
from .models import Airport, Flight, Aircraft

class AircraftAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "capacity")

class AirportAdmin(admin.ModelAdmin):
    list_display = ("id", "code", "city")

class FlightAdmin(admin.ModelAdmin):
    list_display = ("id", "origin", "destination", "price","duration")

# Register your models here.
admin.site.register(Airport, AirportAdmin)
admin.site.register(Flight, FlightAdmin)
admin.site.register(Aircraft, AircraftAdmin)