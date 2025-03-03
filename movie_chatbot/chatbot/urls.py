from django.urls import path
from . import views

urlpatterns = [
    path('chatbot/', views.chatbot, name='.chatbot'),
    path('login/', views.login_view, name='.login'),
]