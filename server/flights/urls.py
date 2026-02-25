from django.urls import path
from . import views

urlpatterns = [
    path("all", views.FlightsView.as_view()),
    path("<int:id>", views.SingleFlightView.as_view()),
    path("modify/<int:id>", views.UserModifyFlights.as_view()),
    path("user/all", views.UserFlights.as_view())
]