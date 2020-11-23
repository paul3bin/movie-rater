from .serializers import MovieSerializer
from django.shortcuts import render
from . import models, serializers
from rest_framework import viewsets


class MovieViewSet(viewsets.ModelViewSet):
    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer

class RatingViewSet(viewsets.ModelViewSet):
    queryset = models.Rating.objects.all()
    serializer_class = serializers.RatingSerializer