from django.db import models
from django.contrib.auth.models import User

# Create your models here.
#MESSAGE..make migrates after renaming
class Room(models.Model):
    title = models.CharField(max_length=255)

class ChatApp(models.Model):
    text = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    # room = models.CharField(max_length=255)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    #make room a text field and method to filter it by forginkey
#
    #foreignkey access other attirube from a different table ..
    #user table and you can pull off users
    #this creates relationship between owner and the user in your table
    #then you can target that user's names and attirubes
    #ChatApp.owner.username ...something like that

    def __str__(self):
        return self.text[:50]

        #this will give us a preview
#need to make a model for a chat-room
