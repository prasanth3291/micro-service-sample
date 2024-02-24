
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.user_login, name='login'),
    path('register/', views.register, name='register'),
    path('users/', views.userlist, name='userlist'),
    path('api/users/',views.get_users, name='get_users'),
]

