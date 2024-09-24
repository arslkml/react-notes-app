import React, { useState } from "react";
import NoteForm from "../contents/NoteForm";
import NoteList from "../contents/NoteList";
import SearchBar from "../contents/SearchBar";

const initialNotes = [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
      id: 2,
      title: "React",
      body: "React adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna. React dibuat oleh Facebook dan digunakan dalam pengembangan web modern.",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z',
    }
];

const Notes = () => {
    const [notes, setNotes] = useState(initialNotes)
    const [searchTerm, setSearchTerm] = useState('')

    const addNote = (newNote) => {
        setNotes([...notes, newNote])
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const searchNotes = (term) => {
        setSearchTerm(term)
    }

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className={'max-w-4xl mx-auto p-6'}>
            <h1 className={'text-3xl font-bold text-center mb-8'}>Notes Application</h1>
            <SearchBar searchTerm={searchTerm} onSearch={searchNotes} />
            <NoteForm onAddNote={addNote} />
            <NoteList notes={filteredNotes} onDeleteNotes={deleteNote} />
        </div>
    );
}
 
export default Notes;

