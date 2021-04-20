from django.contrib import admin
from .models import Contact, Note


class ContactAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Contact._meta.fields]
    search_fields = ['name_of_camp', 'image_url', 'manager']

    class Meta:
        model = Contact


class NoteAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Note._meta.fields]
    search_fields = ['name_of_material']

    class Meta:
        model = Note


admin.site.register(Contact, ContactAdmin)
admin.site.register(Note, NoteAdmin)

