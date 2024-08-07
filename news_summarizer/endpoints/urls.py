from django.urls import path
from .views import LoginView,UserDetailsView,SummaryDetails,send_email,receive_email

urlpatterns = [
    path('login', LoginView.as_view(), name='login'), 
    path('userdetail/<int:pk>',UserDetailsView.as_view(),name = 'user-detail'),
    path('summarydetail/<int:pk>',SummaryDetails.as_view(),name =  'summary-detail'),
    path('email',send_email,name = 'email'),
    path('receive-email/', receive_email, name='receive_email')

]
