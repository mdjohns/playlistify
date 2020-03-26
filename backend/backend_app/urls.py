from django.urls import include, path
import backend_app.views as playlistify

urlpatterns = [
    path('test',playlistify.Test.as_view(), name='test')
]