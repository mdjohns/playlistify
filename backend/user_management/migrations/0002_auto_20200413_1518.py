# Generated by Django 3.0.4 on 2020-04-13 15:18

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('user_management', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_id',
            field=models.UUIDField(blank=True, default=uuid.UUID('02794327-3b53-40eb-b998-94d0a915dacf'), primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='join_code',
            field=models.CharField(default='iheq', max_length=4, unique=True),
        ),
        migrations.AlterField(
            model_name='guestuser',
            name='user_id',
            field=models.UUIDField(default=uuid.UUID('090735b6-08d1-4962-97f1-744daf780708'), primary_key=True, serialize=False, unique=True),
        ),
    ]
