from django import forms
from .models import Experience

class ExperienceForm(forms.ModelForm):
    class Meta:
        model = Experience
        fields = ['entity', 'title', 'description', 'period', 'technologies']
        widgets = {
            'entity': forms.TextInput(attrs={'placeholder': 'Experience Entity'}),
            'title': forms.Textarea(attrs={'placeholder': 'Experience Title'}),
            'description': forms.TextInput(attrs={'placeholder': 'Experience Description'}),
            'period': forms.TextInput(attrs={'placeholder': 'Experience Period'}),
        }