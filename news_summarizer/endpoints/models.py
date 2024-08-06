from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    rss_feeds = models.TextField() # probably a list
    interests = models.TextField()  #probably a list
    priority_topics = models.TextField()  #probably a list
   
    

    def set_rss_feeds(self, rss_feeds_list):
        self.rss_feeds = ','.join(rss_feeds_list)
    def get_rss_feeds(self):
        if self.rss_feeds:
            return self.rss_feeds.split(',')
    def set_interests(self, interests_list):
        self.interests = ','.join(interests_list)

    def get_interests(self):
        if self.interests:
            return self.interests.split(',')
        return []

    def append_interest(self, new_interest):
        interests_list = self.get_interests()
        interests_list.append(new_interest)
        self.set_interests(interests_list)

class Summary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    original_link = models.URLField()
    summary_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


