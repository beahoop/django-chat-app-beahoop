from rest_framework import serializers
from .models import ChatApp, Room

class ChatAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatApp
        fields = ('text', 'owner', 'room', "id") #could write '__all__'
        depth = 1

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'
        depth = 1
