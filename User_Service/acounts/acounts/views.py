# views.py

from django.contrib.auth.models import User
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
import json
from .producer import publish
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = UserSerializer(data=data)  # Serialize the incoming data
        if serializer.is_valid():
            serializer.save()
            publish('user-created',serializer.data)
            return JsonResponse({'message': 'User created successfully', 'user': serializer.data})
        return JsonResponse(serializer.errors, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
    

@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            serializer = UserSerializer(user)  # Serialize the user object
            return JsonResponse({'message': 'Login successful', 'user': serializer.data})
        else:
            return JsonResponse({'error': 'Invalid username or password'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

@api_view(['POST'])
def userlist(request):
    users = User.objects.all().values('id', 'username', 'email')  # Retrieve only the necessary fields
    publish(json.dumps(list(users)))
    return JsonResponse({'success': 'retrieved'}, status=405)

@api_view(['GET'])
def get_users(request):
    if request.method == 'GET':
        users = User.objects.all()
        user_data = [{'id': user.id, 'username': user.username, 'email': user.email} for user in users]
        publish(user_data)
        return JsonResponse(user_data, safe=False)
    return JsonResponse({'error': 'Invalid request method'}, status=405)