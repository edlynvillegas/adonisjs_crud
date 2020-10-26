'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Get notes
Route.get('/api/notes', 'NoteController.index')

// Save new note
Route.post('/api/note', 'NoteController.store')

// Edit note
Route.put('/api/note/:id', 'NoteController.modify')

// Delete note
Route.delete('/api/note/:id', 'NoteController.destroy')
