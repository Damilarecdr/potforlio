from django.contrib import admin
from django.utils.html import mark_safe
from .models import Home, Service, Education, Experience, Skill, Category, Portfolio, Blog, Contact

# Register the Home model and the custom admin class with the admin site
class HomeAdmin(admin.ModelAdmin):
    list_display = ('name', 'job', 'job2', 'years_of_experience', 'project_completed')
    search_fields = ('name', 'job', 'job2', 'email')
    list_filter = ('years_of_experience', 'project_completed')
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'phone_number', 'address', 'job', 'job2', 'email', 'whatsapp', 'twitter', 'telegram', 'linkedin', 'cv')
        }),
        ('Professional Details', {
            'fields': ('about', 'years_of_experience', 'project_completed', 'clients')
        }),
        ('Media', {
            'fields': ('logo', 'image')
        }),
        ('Preview', {
            'fields': ('logo_preview', 'image_preview'),
            'description': 'Previews of the uploaded images.'
        }),
    )
    readonly_fields = ('logo_preview', 'image_preview')

    def logo_preview(self, obj):
        if obj.logo:
            return mark_safe(f'<img src="{obj.logo.url}" style="max-height: 200px;">')
        return "No Logo"
    logo_preview.short_description = 'Logo Preview'

    def image_preview(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" style="max-height: 200px;">')
        return "No Image"
    image_preview.short_description = 'Image Preview'

admin.site.register(Home, HomeAdmin)

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'number', 'description', 'detail_url', 'icon_class')

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'institution', 'start_date', 'end_date', 'location')

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'start_date', 'end_date', 'location')

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'proficiency')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass

@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'image_tag')
    list_filter = ('category',)

    def image_tag(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" style="max-height: 50px;">')
        return ''
    image_tag.short_description = 'Image'
    image_tag.allow_tags = True

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'date',)
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('unique_id', 'full_name', 'email', 'phone_number', 'message')
    search_fields = ('full_name', 'email', 'phone_number', 'unique_id')
