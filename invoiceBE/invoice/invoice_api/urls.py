from django.urls import path
from .views import *
#from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("user/signup/",SignupView.as_view(),name='sign-up'),
    path("user/login/",SigninView.as_view(),name='sign-in'),
    path("invoices/",AllInvoices.as_view(),name='all-invoices'),
    path("invoices/new",AllInvoices.as_view(),name='new-invoices'),
    path("invoices/<int:id>",SpecificInvoices.as_view(),name='specific-invoices'),
    path("invoices/<int:id>/items",AddItems.as_view(),name='add-items'),
]
