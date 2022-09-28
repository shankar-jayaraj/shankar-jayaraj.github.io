from django.shortcuts import render
from .models import Profile,ProfileField,Education,Positions,Speaker,Tag,Awards
# Create your views here.
def home(request):
    obj = Profile.objects.all().order_by('id')
    prof_field = ProfileField.objects.all().order_by('id')
    education = Education.objects.all().order_by('id')
    position = Positions.objects.all().order_by('id')
    speaker = Speaker.objects.all().order_by('id')
    tag = Tag.objects.all().order_by('id')
    award = Awards.objects.all().order_by('id')
    return render(request,"index.html",{'profile':obj,'field':prof_field,'education':education,'position':position,'speaker':speaker,'tag':tag,'award':award})