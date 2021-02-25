from django.urls import path


from .views import ChatAppListView, ChatAppDetailAPIView, ChatAppCreateView, ChatAppDestroyView, ChatAppUpdateView

app_name = 'chatapp'
#should be the same as what you said in your conf urls

urlpatterns = [
path('<int:pk>/', ChatAppDetailAPIView.as_view(), name="chatapp_detail"),
path('chat/create/', ChatAppCreateView.as_view(), name='chatapp_create'),
path('chat/remove/<int:pk>/', ChatAppDestroyView.as_view(), name='chatapp_remove'),
path('chat/update/<int:pk>/', ChatAppUpdateView.as_view(), name='chatapp_remove'),
path('chat/', ChatAppListView.as_view(), name='chatapp_list'),
]
#todos:home
#namespace and the name
