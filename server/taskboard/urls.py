from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('tasks', views.get_tasks, name="get_tasks"),
    path('add_task', csrf_exempt(views.add_task), name="add_task")
]
