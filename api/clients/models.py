from phonenumber_field.modelfields import PhoneNumberField
from PIL import Image

from django.db import models
from django.contrib.auth.models import User


class Contact(models.Model):
    first_name = models.CharField('First Name', max_length=50)
    last_name = models.CharField('Last Name', max_length=50)
    email = models.EmailField(blank=False, null=False)
    phone = PhoneNumberField(blank=True)
    avatar = models.ImageField(upload_to='customer_avatars', null=True, blank=True)
    other_contacts = models.TextField(max_length=200, blank=True, null=False)
    note = models.TextField(max_length=200, blank=True, null=False)
    assigned_to = models.ManyToManyField(User, related_name='contact_assigned_users')
    created_by = models.ForeignKey(User, related_name='contact_created_by', on_delete=models.CASCADE)
    created_on = models.DateTimeField('Created on', auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return '%s %s - %s' % (self.first_name, self.last_name, self.email)

    def save(self, *args, **kwargs):
        super(Contact, self).save(*args, **kwargs)

        if self.avatar:
            size = 200, 200
            image = Image.open(self.avatar.path)
            image.thumbnail(size, Image.ANTIALIAS)
            image.save(self.avatar.path)

    class Meta:
        ordering = ['-created_on']


class Note(models.Model):
    note = models.TextField(max_length=200, blank=True, null=False)
    contact = models.ForeignKey(Contact,  blank=True, null=True,
                                 related_name='contact_notes', on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(null=True)
    created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='note_created_by', default=None)
    updated_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='note_updated_by', default=None)

    def __str__(self):
        return '%s %s' % (self.note, self.created_by)

    class Meta:
        verbose_name = 'Запис'
        verbose_name_plural = 'Записи'
