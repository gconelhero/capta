from django import forms
from django.shortcuts import render
from django.http import HttpResponse

from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.views.generic import FormView, View

from .forms import entreEmContato
from d_one.settings import DEFAULT_FROM_EMAIL, EMAIL_HOST_USER
from django.template import loader
from django.contrib import messages

# Create your views here.

class IndexView(FormView):
    form_class = entreEmContato
    success_url = "/"
    
    def get(self, request):
        form = self.form_class(None)

        return render(request, 'captacao/index.html', {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST or None)
        if request.POST and form.is_valid():
            nome = form.cleaned_data['nome']
            email = form.cleaned_data['email']
            telefone = form.cleaned_data['telefone']
            subject = form.cleaned_data['subject']
            mensagem = form.cleaned_data['mensagem']

        if not DEFAULT_FROM_EMAIL:
            form.add_error(field=None, error=u"Envio de email não configurado.")
            return self.form_invalid(form)

        if form.is_valid():
            c = {
                    'E-Mail': email,
                    'Nome': nome,
                    'Telefone': telefone,
                    'Mensagem': mensagem,
                    'domain': request.META['HTTP_HOST'],
                    'site_name': 'GrupoNova',
                    'protocol': 'http://',
                }
            subject = 'Contato de ' + nome
            email_mensagem = str(c)

            sended = send_mail(subject,email_mensagem , EMAIL_HOST_USER, [

                        DEFAULT_FROM_EMAIL], fail_silently=False)
            if sended == 1:
                messages.success(request, u'Um email foi enviado para nós. Entraremos em contato.')
                
                return self.form_valid(form)
            else:
                form.add_error(
                    field=None, error=u"Erro ao enviar email de verificação.")

                return self.form_invalid(form)


class entreEmContatoView(FormView):
    form_class = entreEmContato
    
    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if not DEFAULT_FROM_EMAIL:
            form.add_error(field=None, error=u"Envio de email não configurado.")
            return self.form_invalid(form)

        if form.is_valid():
            data = form.cleaned_data["email"]


    