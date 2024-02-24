#!/usr/bin/env python
import pika, sys, os
import json
import django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "posts.settings")
django.setup()
from django.contrib.auth.models import User


connection = pika.BlockingConnection(pika.ConnectionParameters(host='rabbitmq'))
# connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.queue_declare(queue='register')

def callback(ch, method, properties, body):
    print(f" [x] Received {body}")
    message = json.loads(body)
    print(properties.content_type)
    if properties.content_type == 'user-created':
        print('inside if loop')
        # Assuming message contains user data
        try:            
            # Create a user with the received data
            user = User.objects.create(
                username=message['username'],
                email=message['email'],
                # Add other fields as needed
            )
            print("User created:", user.username)
        except Exception as e:
            print("Error creating user:", str(e))


channel.basic_consume(queue='register', on_message_callback=callback, auto_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()

