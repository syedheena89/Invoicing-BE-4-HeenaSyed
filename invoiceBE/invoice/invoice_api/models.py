from django.db import models
# Create your models here.
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

class userManager(BaseUserManager):
    def create_user(self,username,password,**extra_fields):
        if not username:
            raise ValueError("Username should be provided")
        user = self.model(username=username,**extra_fields)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self,username,password,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        return self.create_user(username,password,**extra_fields)


class User(AbstractBaseUser):
    id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    username = models.CharField(max_length=100,unique=True)
    email = models.CharField(max_length=60)
    password = models.CharField(max_length=16)
    is_staff =models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
 
    USERNAME_FIELD = 'username'
    objects =userManager()
    
    
class Invoices(models.Model):
    invoice_id = models.AutoField(primary_key=True)
    client_name = models.CharField(max_length=200)
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name="invoices")
    date = models.DateField()
    

class Items(models.Model):
    desc = models.TextField()
    rate = models.FloatField()
    quantity = models.IntegerField()
    invoices = models.ForeignKey(Invoices,on_delete=models.CASCADE,related_name="items")
