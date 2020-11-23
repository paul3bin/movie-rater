from django.conf.urls import url, include
from rest_framework import routers
from . import views 

app_name = 'api'

router = routers.DefaultRouter()
router.register('movies', views.MovieViewSet)
router.register('ratings', views.RatingViewSet)

urlpatterns = [
    url('', include(router.urls)),
]