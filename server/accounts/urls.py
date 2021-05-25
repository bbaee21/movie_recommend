from rest_framework_jwt.views import obtain_jwt_token

from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('signup/', views.signup),
    path('login/', obtain_jwt_token),
] 
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
