# Generated by Django 5.0.7 on 2024-08-06 19:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('endpoints', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='email_frequency',
        ),
    ]
