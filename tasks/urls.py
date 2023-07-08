from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

# api versioning
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')
urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Tasks API')),
    path('home/', views.HomeView.as_view(), name ='home'),
    path('logout/', views.LogoutView.as_view(), name ='logout'),
    path('register/', views.CreateUserView.as_view(), name ='register')
]