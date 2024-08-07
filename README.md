## Introduction
Django + SQLite

## Installation

1. **Set up virtual environment if you want to**:

   ```bash
   python -m venv env
   env/Scripts/activate
   ```

2. **Install dependencies from requirements.txt**:

   ```bash
   pip install -r requirements.txt
   ```

3. **Make Migrationss**:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Run the application**:
   ```bash
   python manage.py runserver
   ```
5. **Run the Celery Scheduler in a new terminal**:
   ```bash
   celery -A news_summarizer beat -l info
   ```
6. **Run the Celery Worker in a new terminal**:
   ```bash
   celery -A news_summarizer  worker -l info -P gevent
   ```

7. **Endpoints**: \
    Right now endpoints for login, register, get details of a specific user, get all the summaries previously generated for a user are available\
    POST request with Email and Password at localhost:8000/api/login/ \
    POST request with all user detais to register the user at localhost:8000/api/register/  (Open models.py to see whats needed to create a user) \
    GET request to get all details of a specific user by his UserId at localhost:8000/api/userdetail/<int:pk>  (Example localhost:8000/api/userdetail/1) \
    GET request to get all previously generated summaries of a specific user by his UserId at localhost:8000/api/summarydetail/<int:pk>  (Example localhost:8000/api/summarydetaildetail/1) 
   
   
    
   
    
