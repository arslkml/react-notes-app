import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDeleteNotes}) => {
    return (
        <div>
            <h2 className={'text-xl font-semibold mb-4'}>Daftar Catatan</h2>
            {notes.length > 0 ? (
                <ul className={'space-y-4'}>
                    {notes.map(note => (
                        <NoteItem key={note.id} note={note} onDelete={onDeleteNotes} />
                    ))}  
                </ul>
            ) : (
                <p className={'text-gray-500'}>Tidak ada Catatan</p>
            )}
        </div>
    );
}
 
export default NoteList;
