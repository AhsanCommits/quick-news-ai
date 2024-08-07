from __future__ import absolute_import, unicode_literals
import os

from celery import Celery
from django.conf import settings
from celery.schedules import crontab
from celery import shared_task
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'news_summarizer.settings')


app = Celery('news_summarizer')


app.config_from_object('django.conf:settings', namespace='CELERY')


app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)



@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')