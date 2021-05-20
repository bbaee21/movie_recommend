from django.shortcuts import get_list_or_404, get_object_or_404

# DRF 모듈
# from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

# 직접 정의한 모듈
from .models import Movie
from .serializers import MovieListSerializer


# Create your views here.
# @api_view(['GET', 'POST'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
# def movies(request):
#     movies = Movie.objects.all()
#     context = {
#         'movies': movies,
#     }
#     return render(request, 'moviedata/movies.html', context)



# 전체영화 정보 제공
@api_view(["GET"])
def movie_list(request):
    if request.method == "GET":
        movies = get_list_or_404(Movie)
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


