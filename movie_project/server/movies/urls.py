from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    # 영화 리스트 전체
    path("", views.movie_list),

]