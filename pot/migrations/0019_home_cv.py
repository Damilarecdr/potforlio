# Generated by Django 4.2.5 on 2024-06-14 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pot', '0018_rename_facebook_home_linkedin_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='home',
            name='cv',
            field=models.FileField(default='exit', upload_to='cv/'),
            preserve_default=False,
        ),
    ]