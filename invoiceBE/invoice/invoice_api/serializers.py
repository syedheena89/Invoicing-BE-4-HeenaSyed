from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import *

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = "__all__"
    
    def create(self,validated_data):
        user = User.objects.create_user(
            username = validated_data['username'],
            password = validated_data['password'],
            email = validated_data['email'],
            name = validated_data['name']
        )
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self,data):
        user = authenticate(username =data['username'],password=data['password'])
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect credentials")

class ItemsSerializer(serializers.ModelSerializer):
    class Meta :
        model = Items
        fields ="__all__"

class InvoiceSerializer(serializers.ModelSerializer):
    items = ItemsSerializer(many=True,read_only=True)
    class Meta :
        model = Invoices
        fields = "__all__"