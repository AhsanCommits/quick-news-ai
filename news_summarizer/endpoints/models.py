from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    rss_feeds = models.TextField() # probably a list
    interests = models.TextField()  #probably a list
    priority_topics = models.TextField()  #probably a list
    email_frequency = models.IntegerField(default=1) 

class Summary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    original_link = models.URLField()
    summary_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


