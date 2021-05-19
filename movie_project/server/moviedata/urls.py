from django.urls import path
from . import views

app_name = 'moviedata'
urlpatterns = [
    path('movies/', views.movies, name="movies"),
]
