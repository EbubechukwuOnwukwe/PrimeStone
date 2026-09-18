import django.middleware.csrf
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
import os
import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
@permission_classes([AllowAny])
@ensure_csrf_cookie
def set_csrf_token(request):
    token = django.middleware.csrf.get_token(request) 
    return Response({"details": "CSRF cookie set", "token": token}, status=status.HTTP_200_OK)


SPAM_KEYWORDS = [
    'backlink', 'guest post', 'increase traffic', 'first page of google',  
    'domain authority', 'da improvement', 'search engine ranking', 
    'google maps ranking', 'lead generation', 'b2b leads', 'targeted data', 
    'outreach campaign', 'redesign your website', 'website development', 
    'app development', 'wordpress expert', 'fix errors on your site', 
    'malware removal', 'passive income', 'investment opportunity', 
    'forex trading', 'bitcoin profit', 'financial freedom', 
    'make money fast', 'low risk investment','crypto profit', 'better website'
]

@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt  
def contact_inquiry(request):
    try:
        data = request.data
        if not data:
            return Response({"status": "error", "message": "Payload data content empty"}, status=status.HTTP_400_BAD_REQUEST)

        message_content = str(data.get('message', '')).lower()
        if any(keyword in message_content for keyword in SPAM_KEYWORDS):
            return Response({"status": "error", "message": "Spam content detected"}, status=status.HTTP_400_BAD_REQUEST)

        if data.get('website_source'):
            return Response({"status": "success", "message": "Inquiry filtered"}, status=status.HTTP_200_OK)
        
        name = data.get('name', 'Not Provided')
        email = data.get('email', 'Not Provided')
        number = data.get('number', 'Not Provided')
        message = data.get('message', 'Not Provided')
        service = data.get('service', '')
        other_service = data.get('other_service', '')

        mail_subject = service if service else f"General Inquiry from {name}"
        if service == "Other" and other_service:
            mail_subject = other_service

        formatted_message = (
            f"YOU HAVE A NEW INQUIRY FROM THE WEBSITE..\n\n"
            f"NAME: {name}\n"
            f"EMAIL: {email}\n"
            f"PHONE: {number}\n"
            f"TOPIC: {mail_subject}\n\n"
            f"MESSAGE:\n{message}"
        )
        
        # --- BREVO API EMAIL DELIVERY ---
        configuration = sib_api_v3_sdk.Configuration()
        # Fallback to your key if env variable isn't set yet
        configuration.api_key['api-key'] = os.environ.get('BREVO_API_KEY')
        
        api_instance = sib_api_v3_sdk.TransactionalEmailsApi(sib_api_v3_sdk.ApiClient(configuration))
        
        sender_email = os.environ.get('BREVO_SENDER_EMAIL', os.environ.get('DEFAULT_FROM_EMAIL', 'info@primestonelp.com'))
        receiver_email = os.environ.get('BREVO_RECEIVER_EMAIL', os.environ.get('DEFAULT_FROM_EMAIL', 'admin@primestonelp.com'))

        # Brevo requires structured sender and receiver formats
        send_smtp_email = sib_api_v3_sdk.SendSmtpEmail(
            sender={"name": "PrimeStone WebForm", "email": sender_email},
            to=[{"email": receiver_email, "name": "PrimeStone Admin"}],
            subject=mail_subject,
            text_content=formatted_message,
            reply_to={"email": email} if email != 'Not Provided' else None
        )

        try:
            api_instance.send_transac_email(send_smtp_email)
        except ApiException as mail_err:
            print(f"BREVO API REJECTION DETECTED: {str(mail_err)}")
            return Response({
                "status": "error", 
                "message": f"Server email delivery failed via API: {str(mail_err)}"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({"status": "success", "message": "Inquiry sent!"}, status=status.HTTP_200_OK)
    
    except Exception as e:
        print(f"GLOBAL WORKFLOW ERROR: {str(e)}")
        return Response({"status": "error", "message": "Internal payload process error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)