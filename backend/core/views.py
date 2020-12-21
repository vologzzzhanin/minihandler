import json
from .models import History
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie


def make_history(request):
    try:
        data = json.loads(request.body)
        h = History(data=data)
        h.save()
        status = 'ok'
    except Exception:
        status = 'error'
    return JsonResponse({
        'status': status
    })


@ensure_csrf_cookie
def get_history(request):
    history = History.objects.values(
        'timestamp',
        'data'
    ).order_by(
        '-timestamp'
    )[:10]
    return JsonResponse({
        'history': list(history)
    })
