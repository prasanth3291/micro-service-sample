# posts/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.contrib.auth.models import User


# @csrf_exempt
# def add_comment(request):
#     if request.method == 'POST':
#         data = request.POST
#         post_id = data.get('post_id')
#         author = data.get('author')
#         text = data.get('text')

#         try:
#             post = Post.objects.get(id=post_id)
#             comment = Comment.objects.create(post=post, author=author, text=text)
#             return JsonResponse({'message': 'Comment added successfully', 'comment_id': comment.id})
#         except Post.DoesNotExist:
#             return JsonResponse({'error': 'Post not found'}, status=404)
#     else:
#         return JsonResponse({'error': 'Invalid request method'}, status=405)
    
@api_view(['GET'])
def get_users(request):
    if request.method == 'GET':
        users = User.objects.all()
        user_data = [{'id': user.id, 'username': user.username, 'email': user.email} for user in users]
        print(user_data)
        return JsonResponse(user_data, safe=False)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)
