from django.contrib import admin

# Register your models here.
from .models import ChatApp, Room
admin.site.register(ChatApp)
admin.site.register(Room)
