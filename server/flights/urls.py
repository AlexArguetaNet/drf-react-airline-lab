from django.urls import path
from . import views

urlpatterns = [
    path("all", views.FLightsView.as_view()),
    path("<int:id>", views.SingleFLightView.as_view())
]