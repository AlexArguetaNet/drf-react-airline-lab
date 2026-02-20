from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model()

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email")

# Register your models here.
admin.site.register(User, UserAdmin)