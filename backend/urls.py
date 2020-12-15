from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),  # админка
    path('api/v1/', include('backend.core.urls'))  # URL бэкенда
]

# Во всех остальных случаях выдаем index.html (точку входа на фронтэнд)
# Для страниц на admin/, получаемых через браузер (Не API),
# нужно сделать исключение в паттерне: (?!admin$), иначе не будет отрабатывать
# ADD_SLASH и url адреса админки сломаются
urlpatterns += [
    re_path('^(?!admin$).*$', TemplateView.as_view(template_name='index.html'), name='app'),
]
