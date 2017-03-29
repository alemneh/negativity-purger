from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^purge/$', views.index, name='index'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
