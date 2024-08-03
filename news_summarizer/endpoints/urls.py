from django.urls import path
from .views import LoginView,UserRegistrationView,UserDetailsView,SummaryDetails

urlpatterns = [
    path('login', LoginView.as_view(), name='login'), 
    path('register',UserRegistrationView.as_view(),name = 'register'),
    path('userdetail/<int:pk>',UserDetailsView.as_view(),name = 'user-detail'),
    path('summarydetail/<int:pk>',SummaryDetails.as_view(),name =  'summary-detail')

]
