from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json

from .models import Task

def index(request):
    return HttpResponse("Hello, world. You're at the taskboard index.")

def get_tasks(request):
    return JsonResponse(list(Task.objects.all().values()), safe=False)

def add_task(request):
    body = json.loads(request.body)
    t = Task(task=body['task'])
    t.save()
    return JsonResponse(list(Task.objects.all().values()), safe=False)
