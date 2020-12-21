from django.urls import path

from backend.core import views

urlpatterns = [
    path('make_history', views.make_history),
    path('get_history', views.get_history)
]
