# Generated by Django 3.1.7 on 2021-02-27 19:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chatapp', '0009_remove_chatapp_room'),
    ]

    operations = [
        migrations.AddField(
            model_name='chatapp',
            name='room',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='chatapp.room'),
        ),
    ]
