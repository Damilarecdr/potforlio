# Generated by Django 4.2.5 on 2024-06-15 07:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pot', '0026_contact_unique_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='unique_id',
        ),
    ]