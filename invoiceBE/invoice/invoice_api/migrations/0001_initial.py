# Generated by Django 4.1.10 on 2023-09-05 05:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('username', models.CharField(max_length=100, unique=True)),
                ('email', models.CharField(max_length=60)),
                ('password', models.CharField(max_length=16)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Invoices',
            fields=[
                ('invoice_id', models.AutoField(primary_key=True, serialize=False)),
                ('client_name', models.CharField(max_length=200)),
                ('date', models.DateField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='invoices', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.TextField()),
                ('rate', models.FloatField()),
                ('quantity', models.IntegerField()),
                ('invoices', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='invoice_api.invoices')),
            ],
        ),
    ]