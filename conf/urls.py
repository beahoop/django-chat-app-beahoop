"""conf URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/v1/', include('api.urls', namespace="api_v1")),
#     path('', include('frontend.urls', namespace="frontend")),
# ]
urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('todos.urls', namespace='todos')),
    path('api/v1/', include('api.urls', namespace="api_v1")),
    path('api-auth/', include('rest_framework.urls')),
    # where we got the api-auth info from
    # https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/
    path('', include('frontend.urls', namespace="frontend")),
    #app name needs to match this
    path('rest-auth/', include('rest_auth.urls')),
    #it loads a lot of urls for you already defined
    #login and logout
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    # path('rest-auth/login/', include('rest-auth/login/.urls')),
    #you have tocreate this to get registration
]
