from django.db import models
import jsonfield


class Class(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    data = jsonfield.JSONField()
