from django.contrib import admin
from .models import Profile,ProfileField,Education,Positions,Speaker,Tag,Awards

# Register your models here.
class ProfRef(admin.ModelAdmin):
    list_display = ['id','text']

class FieldRef(admin.ModelAdmin):
    list_display = ['id','text']

class EducationRef(admin.ModelAdmin):
    list_display = ['id','text']

class PositionRef(admin.ModelAdmin):
    list_display = ['id','text']

class SpeakerRef(admin.ModelAdmin):
    list_display = ['id','spk_type','text']
    list_filter = ['spk_type']

class TagRef(admin.ModelAdmin):
    list_display = ['id','text']

class AwardsRef(admin.ModelAdmin):
    list_display = ['id','award']

admin.site.register(Profile,ProfRef)
admin.site.register(ProfileField,FieldRef)
admin.site.register(Education,EducationRef)
admin.site.register(Positions,PositionRef)
admin.site.register(Speaker,SpeakerRef)
admin.site.register(Tag,TagRef)
admin.site.register(Awards,AwardsRef)