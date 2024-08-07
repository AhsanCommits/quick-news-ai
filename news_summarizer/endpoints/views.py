from django.contrib.auth import authenticate
from django.http import HttpResponse
from rest_framework import generics
from .models import User,Summary
from django.contrib.auth.hashers import check_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegistrationSerializer,UserSerializer,SummarySerializer
from .tasks import send_mail_func
from .models import User
from langchain_community.document_loaders import RSSFeedLoader
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# class UserRegistrationView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserRegistrationSerializer

@csrf_exempt
def receive_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        print("got the mail : " ,email)
     
        return JsonResponse({'status': 'success', 'email': email})
    return JsonResponse({'status': 'failed'}, status=400)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'detail': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)

        if check_password(password, user. password):
            return Response({'detail': 'Login successful','user_id':user.id}, status=status.HTTP_200_OK)
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
    


def send_email(request):
    send_mail_func.delay()
    return HttpResponse({"detail" : "ok"})
 