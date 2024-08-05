# Main functions

## User registration
Can be simple email/password or Oauth. Persons in charge of frontend select the best option according to their preferences.
The user ID should be used in all other steps to mark news anf preferences for the specific user

## User settings
It should give the possibility to save the following info at a minimum:
1. Email
2. List of RSS feed links to subscribe to
3. Description of interests
4. Description of priority topics for immediate alert

Data should be saved in a database. Potentially MongoDB (free tier for [Atlas](https://www.mongodb.com/products/platform/atlas-database) ), in a table called users

## Read RSS feed
This should be a scheduled task to be run for each user and RSS feed with a certain cadence (for instance, every 5 minutes).
For this schedule and all other schedule, a simple initial solution can be [this Python library](https://schedule.readthedocs.io/en/stable/). If we have the time, we can consider extending to a dedicated scheduler such as Celery.
The chain of action is:
1. Read news in RSS feed
2. For each news, decide if this is relevant for the user 
3. if yes, it should be saved in a database with all the metadata (news link, user that consider it interesting, date, ...). We could use [Qdrant](https://qdrant.tech/) free online service for this purpose.
4. Decide if the news is priority
5. If yes, send an email to the user with the news title and link using a [mail service](https://geekflare.com/software/marketing/transactional-email-services-free/)

## Summarise news
This should be a scheduled task (once a day? or we ask the user for a frequency?)
The chain of action for each user is:
1. Search in the DB news not yet summarized relevant for the user
2. Create a summary for the user using all news as context
3. mark news as summarized
4. Send an email to the user with a summary (same service as above), or create a post for the user in its web area
5. In any case, save the summary in MongoDB with additional metadata (user, date, link to original news)

## Chat with news
THis should be a chat interface.
RAG should be done of news in Qdrant, using filter to select news for the user which is chatting
