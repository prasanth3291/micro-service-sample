
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('get_users/', views.get_users, name='get users'),
    # path('sample/',views.sample,name='sample')
]
