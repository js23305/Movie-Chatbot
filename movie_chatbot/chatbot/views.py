from django.template import loader
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login
import json

# This is for chatbot page
def chatbot(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())

# This is for handling login requests
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        # Authenticate the user
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid email or password'}, status =400)