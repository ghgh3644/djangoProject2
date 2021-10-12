from django.urls import path

from indextest import views

app_name = "indextest"

urlpatterns = [
    path('index/', views.test, name='index')
]