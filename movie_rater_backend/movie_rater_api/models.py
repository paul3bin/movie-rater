from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MaxValueValidator, MinValueValidator

class Movie(models.Model):
    title = models.CharField(max_length=200)
    genre = models.TextField(max_length=50, default=None)
    description = models.TextField(max_length=500)

    def number_of_ratings(self):
        ratings = Rating.objects.filter(movie=self)
        return len(ratings)

    def average_rating(self):
        ratings = Rating.objects.filter(movie=self)
        sum=0
        for rating in ratings:
            sum+=rating.stars
        if len(ratings)>0:
            return sum/len(ratings)
        else:
            return 0

    def __str__(self):
        return self.title


class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])

    class Meta:
        unique_together = (('user'), ('movie'),)
        index_together = (('user'), ('movie'),)