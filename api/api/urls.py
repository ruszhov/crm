from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views

from account.views import UserList
from clients.views import ContactsViewSet

app_name = 'api'

# root routes
router = DefaultRouter()
router.register(r'users', UserList)
router.register(r'clients', ContactsViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

urlpatterns += [
    path('api-token-auth/', views.obtain_auth_token)
]

# add this
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)