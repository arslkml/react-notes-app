import React, { useState } from "react";
import NoteForm from "../contents/NoteForm";
import NoteList from "../contents/NoteList";
import SearchBar from "../contents/SearchBar";

const initialNotes = [
    {
        id: 1,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 2,
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 3,
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 4,
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 5,
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 6,
        title: "Module Bundler",
        body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
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

