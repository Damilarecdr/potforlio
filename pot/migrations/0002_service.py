# Generated by Django 4.2.5 on 2024-06-13 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pot', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('order', models.PositiveIntegerField()),
                ('link', models.URLField()),
                ('icon', models.CharField(max_length=100)),
            ],
            options={
                'ordering': ['order'],
            },
        ),
    ]
