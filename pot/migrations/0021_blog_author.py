# Generated by Django 4.2.5 on 2024-06-15 03:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pot', '0020_alter_home_cv'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='author',
            field=models.CharField(default='exit', max_length=100),
            preserve_default=False,
        ),
    ]
