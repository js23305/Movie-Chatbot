from django import forms

class GenreForm(forms.Form):
    genre = forms.CharField(label='Enter a genre:', max_length=100)