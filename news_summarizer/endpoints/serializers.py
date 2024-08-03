from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import User,Summary


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'rss_feeds', 'interests', 'priority_topics']


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'rss_feeds', 'interests', 'priority_topics']

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            rss_feeds=validated_data['rss_feeds'],
            interests=validated_data['interests'],
            priority_topics=validated_data['priority_topics']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class SummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Summary
        fields = ['id', 'user', 'original_link', 'summary_text', 'created_at']