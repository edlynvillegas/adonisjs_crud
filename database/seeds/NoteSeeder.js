'use strict'

/*
|--------------------------------------------------------------------------
| NoteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const Note = use('App/Models/Note')

class NoteSeeder {
  async run () {
    await Note.createMany([
      {
        title: 'Note #1',
        note: 'Lorem ipsum dolor..'
      },
      {
        title: 'Note #2',
        note: 'Lorem ipsum dolor sit amet'
      },
      {
        title: 'Note #3',
        note: 'Lorem ipsum dolor sit.'
      }
    ])
  }
}

module.exports = NoteSeeder
