# Generated by Django 4.2.5 on 2024-06-14 06:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pot', '0010_alter_contactmessage_services'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ContactMessage',
        ),
    ]