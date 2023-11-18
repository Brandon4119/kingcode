from django.shortcuts import render

from django.shortcuts import render, redirect
from .forms import ExperienceForm
from .models import Experience


def experience_list(request):
    experience = Experience.objects.all()
    return render(request, 'experience/experience_list.html', {'experience': experience})

def experience_new(request):
    if request.method == 'POST':
        form = ExperienceForm(request.POST, request.FILES)
        if form.is_valid():
            experience = form.save()
            return redirect('home')

    else:
        form = ExperienceForm()


    return render(request, 'experience/experience_new.html', {
        'form': form
    })