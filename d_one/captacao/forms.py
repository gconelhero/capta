from django import forms


class entreEmContato(forms.Form):
    nome = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control line-input', 'placeholder': 'Nome'}))
    
    email = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control line-input', 'placeholder': 'Email'}))

    telefone = forms.CharField(widget=forms.NumberInput(
        attrs={'class': 'form-control line-input', 'placeholder': 'Telefone'}))
    
    subject = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control line-input', 'placeholder': 'Assunto'}))
    
    mensagem = forms.CharField(widget=forms.Textarea(
        attrs={'class': 'form-control line-input', 'placeholder': 'Mensagem'}))
    