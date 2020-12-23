from django.urls import path

from backend.core import views

urlpatterns = [
    path('save_class', views.save_class),
    path('get_class_list', views.get_class_list),
    path('delete_class', views.delete_class)
]
