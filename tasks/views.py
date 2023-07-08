from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

# Create your views here.
class TaskView(viewsets.ModelViewSet):
         
    permission_classes = (IsAuthenticated, )
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class HomeView(APIView):
     
   permission_classes = (IsAuthenticated, )
   
   def get(self, request):
       content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}
       return Response(content)
   
class LogoutView(APIView):
     
   permission_classes = (IsAuthenticated, )
   
   def get(self, request):
       try:
           refresh_token = request.data["refresh_token"]
           token = RefreshToken(refresh_token)
           token.blacklist()
           return Response(status=status.HTTP_205_RESET_CONTENT)
       except Exception as e:
           return Response(status=status.HTTP_400_BAD_REQUEST)
       
class CreateUserView(APIView):
     
   def post(self, request):
       user = request.data
       username = user["username"]
       password = user["password"]
       user = User.objects.create_user(username=username, password=password)
       user.save()
       return Response(status=status.HTTP_201_CREATED)
   def get_extra_actions(self):
       return []