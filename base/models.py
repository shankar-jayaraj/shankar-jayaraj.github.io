from django.db import models

# Create your models here.
class Profile(models.Model):
    text = models.TextField()

class ProfileField(models.Model):
    text = models.CharField(max_length=200)

class Education(models.Model):
    text = models.TextField()

class Positions(models.Model):
    text = models.CharField(max_length=200)

class Speaker(models.Model):
    spk_type = models.CharField(max_length=50,choices=(('Technical','Technical'),('Non Technical','Non Technical')))
    text = models.CharField(max_length=200)

class Tag(models.Model):
    text = models.CharField(max_length=20)

class Awards(models.Model):
    award = models.CharField(max_length=200)