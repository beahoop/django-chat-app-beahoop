# Generated by Django 3.1.7 on 2021-02-25 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatapp', '0002_chatapp_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='chatapp',
            name='username',
            field=models.CharField(default='anony', max_length=255),
            preserve_default=False,
        ),
    ]