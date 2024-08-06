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
from langchain_openai import ChatOpenAI
from langchain_core.pydantic_v1 import BaseModel, Field
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import PydanticOutputParser
from django.core.mail import EmailMessage
from django.conf import settings

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
    


# def summarize(content,llm):
#     prompt_template = PromptTemplate.from_template(
#     "Summarize the news content :\
#     {content} ")
 
#     chain =  prompt_template | llm
#     summary = chain.invoke(input = {"content" : content})
#     return summary.content

# def load_feeds(urls):
#         try:
#             loader = RSSFeedLoader(urls)
#             feeds = loader.load()
#             print(len(feeds))
#         except Exception as e:
#              print(e)
#         return feeds

# def format_email(summaries):
#     email_body = f"""
#         Hi !,

#         We hope you are doing great.

#         Welcome to Quick News AI - your personal news summarizer! Here are the latest news summaries that match your interests:

#         """
#             # Adding bullet points for each summary
#     for summary in summaries:
#             email_body += f"- {summary}\n"
            
#             # Closing the email
#     email_body += """
#         Stay informed,
#         The Quick News AI Team
#         """

#     return email_body

# class FitInterest(BaseModel):
#     """Whether the news fit with user's interests."""
#     fit_interests: bool = Field(description="Do the news fit the user's interest?")

def send_email(request):
    send_mail_func.delay()
    return HttpResponse({"detail" : "ok"})
    # llm = ChatOpenAI(
    # model="tiiuae/falcon-180B-chat",
    # api_key="api71-api-6cfa0f42-0cbf-46ce-b14f-43947f037f46",
    # base_url="https://api.ai71.ai/v1/",)
    
    # users  =  User.objects.filter(is_staff=False, is_superuser=False)
    # for user in users:
    #     print(f"Sending mail to {user.email} \n")
    #     interests = user.get_interests()
    #     rss_feeds = user.get_rss_feeds()
    #     print(rss_feeds)
    #     data = load_feeds(rss_feeds)
        # interest_parser = PydanticOutputParser(pydantic_object=FitInterest)
        # prompt_interests = PromptTemplate.from_template(
        # """You are an expert news analyst which needs to check if a  news  is\
        # according to any of the user's interests. The user expressed the \
        # following interests:
        #     {interests}
        
        # Please establish whether the following news match the user's interests, return True \
        # only and only if it 100% matches the interests:

        # Title of news: {title}
        # Description of news: {description}
        # Respond with True or False
        # Wrap the output in `json` tags\n{format_instructions}""")



        # partial_interests = prompt_interests.partial(interests=interests,format_instructions=interest_parser.get_format_instructions())
        # interests_chain = partial_interests | llm | interest_parser
        # summaries = []
        # for i in range(len(data)):
        #     print(data[i].metadata["title"] + "      " + data[i].metadata["description"])
        #     print("\n")
        #     try:
        #         test = interests_chain.invoke(input={"title":data[i].metadata["title"] ,"description" : data[i].metadata["description"]})
        #     except:
        #         test = FitInterest(fit_interests = False)
        #     if test.fit_interests:
        #         summary = summarize(data[i].page_content,llm)
        #         summaries.append(summary)
        #     print(test)
        #     print("\n")
        # email_body = format_email(summaries)
        # email_subject = " Your QuickNews AI Summary for the day has Arrived !"
        # email = EmailMessage(
        # email_subject, email_body,
        # settings.EMAIL_HOST_USER, [user.email],
        #                      )
        # email.send(fail_silently=False)
        # print(f"Email sent to {user.email} \n")
