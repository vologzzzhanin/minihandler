import json
from .models import Class
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie


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


@ensure_csrf_cookie
def get_class_list(request):
    class_list = Class.objects.values().order_by(
        '-timestamp'
    )[:10]
    return JsonResponse({
        'class_list': list(class_list)
    })


def delete_class(request):
    try:
        id = json.loads(request.body)
        Class.objects.filter(pk=id).delete()
        status = 200
    except Exception:
        status = 400
    return JsonResponse({'status': status})
