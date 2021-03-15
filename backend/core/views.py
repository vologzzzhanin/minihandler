import json

from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator

from .constants import MESSAGES
from .models import Class


@ensure_csrf_cookie
def get_token(request):
    message = {'message': 'token received'}

    return JsonResponse(message, status=200)


def check_login(function):
    """Проверка логина"""
    def wrapper(request, *args, **kwargs):
        if not request.user.is_authenticated:
            message = {'message': MESSAGES['login_required']}

            return JsonResponse(message, status=403)
        return function(request, *args, **kwargs)
    return wrapper


class Login(View):
    def post(self, request):
        body = json.loads(request.body)

        email, password = body['email'], body['password']

        try:
            user = authenticate(email=email, password=password)

            if user is not None:
                login(request, user)

                message = MESSAGES['successfull_login']
                status = 200
            else:
                message = MESSAGES['unsuccessfull_login']
                status = 403

            result = {'message': message}
        except Exception as e:
            status = 500
            result = {'error': str(e)}

        return JsonResponse(result, status=status)


class Logout(View):
    def post(self, request):
        logout(request)

        message = {'message': MESSAGES['successfull_logout']}

        return JsonResponse(message, status=200)


@method_decorator(check_login, name='dispatch')
class SaveClass(View):
    def post(self, request):
        body = json.loads(request.body)

        id, data = body['id'], body['data']

        try:
            cls, created = Class.objects.update_or_create(
                pk=id or None,
                defaults={'data': data},
            )
            result = {
                'class_id': cls.id,
                'class_data': cls.data
            }
            status = 200
        except Exception as e:
            status = 400
            result = {'error': str(e)}

        return JsonResponse(result, status=status)


@method_decorator(check_login, name='dispatch')
class ClassList(View):
    def get(self, request):
        try:
            class_list = list(
                Class.objects.values().order_by(
                    '-timestamp'
                )[:10]
            )
            status = 200
            result = {'class_list': class_list}
        except Exception as e:
            status = 400
            result = {'error': str(e)}

        return JsonResponse(result, status=status)


@method_decorator(check_login, name='dispatch')
class DeleteClass(View):
    def post(self, request):
        body = json.loads(request.body)

        id = body['id']

        try:
            Class.objects.filter(pk=id).delete()

            status = 200
            result = {'message': MESSAGES['successfull_deletion']}
        except Exception as e:
            status = 400
            result = {'error': str(e)}

        return JsonResponse(result, status=status)
