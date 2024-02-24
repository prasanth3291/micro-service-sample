from django.contrib.auth.models import User
import pika,json

def publish(method,body):      
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='rabbitmq'))
    # connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))

            
    channel = connection.channel()
    channel.queue_declare(queue='hello')
    properties=pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='register', body=json.dumps(body),properties=properties)
    print(" [x] Sent 'registered user details'")
    connection.close()

    