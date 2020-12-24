import json
from .models import Class
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


def login_view(request):
    try:
        body = json.loads(request.body)
        email, password = body['email'], body['password']
        user = authenticate(email=email, password=password)
        if user is not None:
            login(request, user)
            message = 'Вы успешно авторизовались'
            status = 200
        else:
            message = 'Проверьте правильность ввода Email и пароля'
            status = 403
        result = {'message': message}
        return JsonResponse(result, status=status)
    except Exception as e:
        status = 500
        result = {'error': str(e)}
        return JsonResponse(result, status=status)


def logout_view(request):
    logout(request)
    status = 200
    return HttpResponse(status=status)


@login_required
def save_class(request):
    try:
        body = json.loads(request.body)
        id, data = body['id'], body['data']
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
        print(e)
        result = {}
        status = 400
    return JsonResponse(result, status=status)


@login_required
@ensure_csrf_cookie
def get_class_list(request):
    print(request.user)
    class_list = Class.objects.values().order_by(
        '-timestamp'
    )[:10]
    return JsonResponse({
        'class_list': list(class_list)
    })


@login_required
def delete_class(request):
    try:
        id = json.loads(request.body)
        Class.objects.filter(pk=id).delete()
        status = 200
    except Exception:
        status = 400
    return JsonResponse({'status': status})
