from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# Create your views here.
class TaskView(viewsets.ModelViewSet):
    
    permission_classes = (IsAuthenticated, )
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

    def post(self, request):
        author_id = request.user

        request.data['author_id'] = author_id
        TaskSerializer(data=request.data).is_valid(raise_exception=True)
        TaskSerializer.save()
    
    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(author_id=user)

class HomeView(APIView):
    permission_classes = (IsAuthenticated, )
    # print(userserlia)
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
   
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)

        data['user_id'] = self.user.id
        return data
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer