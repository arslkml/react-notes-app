import React from "react";

const NoteItem = ({ note, onDelete }) => {
    return (
        <li className={'bg-white p-4 rounded-lg shadow-md border border-gray-200'}>
            <h2 className={'text-lg font-semibold'}>{note.title}</h2>
            <p className={'text-gray-700 mb-4'}>{note.body}</p>
            <div className={'flex gap-3'}>
                <button onClick={() => onDelete(note.id)}>Delete</button>
                <button onClick={() => alert(`Edit catatan: ${note.title}`)}>Archive</button>
            </div>
            
        </li>
    );
}
 
export default NoteItem;
