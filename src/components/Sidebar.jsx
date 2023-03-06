import React from "react";
export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`flex items-center justify-items-between gap-4 space-y-6  hover:text-white hover:bg-[#4A4E74] group   ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="px-7 py-5 cursor-pointer text-2xl w-fit">
          {note.body.split("\n")[0]}
        </h4>

        <button onClick={(event) => props.deleteNote(event, note.id)}>
          <img
            src="/icon/delete.svg"
            alt="delete"
            className="invert-0 w-fit hidden group-hover:block"
          />
        </button>
      </div>
    </div>
  ));

  return (
    <div className=" shadow-md w-[20%] mb-16   ">
      <div className="flex px-7  items-center gap-6 py-8">
        <p className="text-4xl font-bold">Note</p>
        <button
          className="text-4xl px-5 rounded-md py-2 text-white bg-[#4A4E74]"
          onClick={props.newNote}
        >
          +
        </button>
      </div>
      {noteElements}
    </div>
  );
}
