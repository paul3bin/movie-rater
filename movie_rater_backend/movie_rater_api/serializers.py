from rest_framework import serializers
from . import models

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Movie
        fields = ('id', 'title', 'description')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Rating
        fields = ('id', 'stars', 'user', 'movie')