from django.urls import path
from . import views

urlpatterns = [
    path("register", views.RegisterView.as_view()),
    path("login", views.LoginView.as_view()),
    path("token/refresh", views.RefreshTokenView.as_view()),
    path("user", views.UserInfoView.as_view()),
    path("logout", views.LogoutView.as_view())
]