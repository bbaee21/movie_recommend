# from django.db.models import fields
from rest_framework import serializers
from .models import Community, CommunityComment
from django.contrib.auth import get_user_model



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id', 'username',]

class CommunityListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Community
    fields = "__all__"


class CommunityCommentListSerializer(serializers.ModelSerializer):
  class Meta:
    model = CommunityComment
    fields = "__all__"
    read_only_fields = [
        "community",
    ]

class CommunityCommentSerializer(serializers.ModelSerializer):
  user = UserSerializer()
  community = CommunityListSerializer()
  class Meta:
    model = CommunityComment
    fields = ('id', 'user', 'community', 'content', 'created_at', 'updated_at')
    read_only_fields = [
        "community",
    ]

class CommunitySerializer(serializers.ModelSerializer):
  user = UserSerializer
  comment_set = CommunityCommentSerializer(many=True, read_only=True)
  comment_count = serializers.IntegerField(source="comment_set.count", read_only=True)
  
  class Meta:
      model = Community
      fields = ('id', 'user', 'title', 'content', 'created_at', 'updated_at')
      read_only_fields = [
        "user",
        "comment_set",
        "comment_count",
      ]
