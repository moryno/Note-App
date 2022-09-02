import React from 'react'
import Card from './Card'
import './Notes.css'

function Notes() {

  const dummyNotes = [
    {
      title: "Hello world!",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: 1
    },
    {
      title: "Hello world!",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 2
    },
    {
      title: "Hello world!",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: 3
    }
  ]

  const displayNotes = dummyNotes.map((note) => {
    return <Card key={note.id} notes={note} />
  })

  function renderNotes() {
    let notes = []
    let size = 3


    for(let i = 0; i < displayNotes.length; i += size ) {
      notes.push(displayNotes.slice(i, i + size))
    }

    const renderNotes = notes.map((notesRow) => {
      return <div className='notes-row'>{notesRow}</div>
    })

    return renderNotes

  }

  return (
    <div>
      {renderNotes()}
    </div>
  )
}

export default Notes