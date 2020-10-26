'use strict'

const Note = use('App/Models/Note')

class NoteController {
    async index ({ response }) {
        // const events = await Event.all()
        const notes = await Note.all()
        console.log('GET NOTES', notes.toJSON())
    
        return response.status(200).json(notes)
    }
    async store ({ request, response }) {
        const note = new Note();
        
        note.title = request.input('title')
        note.note = request.input('note')

        await note.save()
        
        return response.status(200).json({ success: true })
    }
    async modify ({ params, request, response }) {
        const note = await Note.find(params.id);

        note.title = request.input('title')
        note.note = request.input('note')
        
        await note.save()
        
        return response.status(200).json({ success: true })
    }
    async destroy ({ params, response }) {
        const note = await Note.find(params.id);

        await note.delete()

        return response.status(200).json({ success: true })
    }
}

module.exports = NoteController