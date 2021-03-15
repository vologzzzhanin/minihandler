from django.urls import path

from . import views

urlpatterns = [
    path('get_token', views.get_token),
    path('login', views.Login.as_view()),
    path('logout', views.Logout.as_view()),
    path('save_class', views.SaveClass.as_view()),
    path('class_list', views.ClassList.as_view()),
    path('delete_class', views.DeleteClass.as_view())
]
