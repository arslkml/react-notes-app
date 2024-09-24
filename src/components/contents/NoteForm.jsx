import React, { useState } from "react";

const NoteForm = ({ onAddNote }) => {
    const [newNote, setNewNote] = useState({ title: '', body: '' })

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newNote.title && newNote.body) {
          const newNoteData = {
            id: +new Date(),
            title: newNote.title,
            body: newNote.body,
            archived: false,
            createdAt: new Date().toISOString(),
          };
          onAddNote(newNoteData);
          setNewNote({ title: '', body: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={'mb-8'}>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Judul catatan"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mb-4">
                <textarea
                    placeholder="Isi catatan"
                    value={newNote.body}
                    onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
                    required
                    className={'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200'}
                ></textarea>
            </div>
            <button type="submit" className={'bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'}>Tambah Catatan</button>
        </form>
    );
}
 
export default NoteForm;