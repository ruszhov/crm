from django.contrib.auth.models import User
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser

from account.serializers import UserSerializer
from django.conf import settings


class UserList(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

    print(settings.BASE_DIR)