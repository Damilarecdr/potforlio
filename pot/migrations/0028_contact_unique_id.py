# Generated by Django 4.2.5 on 2024-06-15 07:30

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('pot', '0027_remove_contact_unique_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='unique_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
    ]
