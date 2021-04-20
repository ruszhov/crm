from rest_framework.serializers import ModelSerializer, SerializerMethodField, SlugRelatedField
from .models import Contact, Note


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'note']

    def get_id(self, obj):
        return obj.pk


class ContactSerializer(ModelSerializer):
    id = SerializerMethodField()
    contact_notes = NoteSerializer(many=True, read_only=True)
    # contact_notes = SlugRelatedField(
    #     many=True,
    #     read_only=True,
    #     slug_field='note'
    # )

    class Meta:
        model = Contact
        fields = [
            'id', 'first_name', 'last_name', 'email', 'phone', 'avatar', 'other_contacts', 'is_active', 'contact_notes'
        ]

    def get_id(self, obj):
        return obj.pk
