from django.shortcuts import render
from rest_framework import generics, permissions
from .permissions import IsOwnerOrReadOnly

from .models import ChatApp, Room
from .serializers import ChatAppSerializer, RoomSerializer


class ChatAppListView(generics.ListAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer
#all is bring all back you could filter it by others

class ChatAppDetailAPIView(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = ChatApp.objects.all()
    #this NEEDS a pk(look in the url file)
    #it will find just that one pk
    serializer_class = ChatAppSerializer

class ChatAppCreateView(generics.CreateAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    # def form_valid(self, form):
    #     form.instance.owner = self.request.user
    #     form.instance.room_id = self.kwargs['pk']
    #     #keyword agr
    #     return super().form_valid(form)
    #owner is property on the model, setting owner on the user that is logged in
    #this links the logged in user will be added as the owner to the chat
    #when it gets created

class ChatAppDestroyView(generics.DestroyAPIView):
    permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatAppUpdateView(generics.UpdateAPIView):
    permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = ChatApp.objects.all()
    # queryset = ChatApp.objects.exclude(ChatApp.room)
    serializer_class = ChatAppSerializer

class RoomView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)
