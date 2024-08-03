from django.contrib.auth import authenticate
from rest_framework import generics
from .models import User,Summary
from django.contrib.auth.hashers import check_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegistrationSerializer,UserSerializer,SummarySerializer


class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'detail': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)

        if check_password(password, user.password):
            return Response({'detail': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
        

class UserDetailsView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
 

class SummaryDetails(APIView):
    serializer_class = SummarySerializer
    def get(self,request,pk):
        try:
            user = User.objects.get(id = pk)
        except User.DoesNotExist:
            return Response({'detail': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        summaries = Summary.objects.filter(user=user)
        serializer = SummarySerializer(summaries, many=True)
        return Response(serializer.data)