# Generated by Django 3.1.7 on 2021-02-27 19:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chatapp', '0010_chatapp_room'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chatapp',
            name='room',
        ),
    ]
