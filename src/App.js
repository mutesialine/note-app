import React from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { data } from "./data";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";
export default function App(){
  const[notes, setNotes]= useState( () => JSON.parse(localStorage.getItem("notes")) || []
    )

  const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
      );

      React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);


       function updateNote(text) {
         setNotes((oldNotes) =>
           oldNotes.map((oldNote) => {
             return oldNote.id === currentNoteId
               ? { ...oldNote, body: text }
               : oldNote;
           })
         );
       }
 
        function findCurrentNote() {
          return (
            notes.find((note) => {
              return note.id === currentNoteId;
            }) || notes[0]
          );
        }
    


       function createNewNote() {
         const newNote = {
           id: nanoid(),
           body: "# Type your markdown note's title here",
         };
         setNotes((prevNotes) => [newNote, ...prevNotes]);
         setCurrentNoteId(newNote.id);
       }
    
  return (
    <main className="">
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="flex">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
          />

          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="flex flex-col items-center mt-72 gap-y-8 ">
          <h1 className="text-4xl font-bold">You have no notes</h1>
          <button
            className="bg-violet-500 text-white px-4 py-3 text-2xl rounded-lg w-fit"
            onClick={createNewNote}
          >
            Create one now
          </button>
        </div>
      )}
    </main>
  );

}