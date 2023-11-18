from django import forms
from .models import Project


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        field = ['name', 'description', 'year', 'img', 'repository', 'technologies' ]
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Projects Name'}),
            
            'description': forms.Textarea(attrs={'placeholder': 'Projects Description'}),

            'year': forms.NumberInput(attrs={'placeholder': 'Year'}),

            'img': forms.ClearableFileInput(attrs={'placeholder': 'Select an Image'}),
            
            'repository': forms.URL(attrs={'placeholder': 'Repository URL'}),
        }