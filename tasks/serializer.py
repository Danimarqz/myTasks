from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id', 'title', 'description', 'completed', 'author')
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['password'])
        return user
    class Meta:
        model = User
        fields = ('id', 'username')