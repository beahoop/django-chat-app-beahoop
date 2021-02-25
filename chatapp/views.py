from django.shortcuts import render
from rest_framework import generics

from .models import ChatApp
from .serializers import ChatAppSerializer


class ChatAppListView(generics.ListAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer
#all is bring all back you could filter it by others

class ChatAppDetailAPIView(generics.RetrieveAPIView):
    queryset = ChatApp.objects.all()
    #this NEEDS a pk(look in the url file)
    #it will find just that one pk
    serializer_class = ChatAppSerializer

class ChatAppCreateView(generics.CreateAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatAppDestroyView(generics.DestroyAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatAppUpdateView(generics.UpdateAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer
