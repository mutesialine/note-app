import React from "react";
export default function Sidebar(props) {
   const noteElements = props.notes.map((note, index) => (
     <div className="" key={note.id}>
       <div
         className={`space-y-6  hover:text-white hover:bg-[#4A4E74]   ${
           note.id === props.currentNote.id ? "selected-note" : ""
         }`}
         onClick={() => props.setCurrentNoteId(note.id)}
       >
         <h4 className="px-7 py-5 cursor-pointer text-2xl w-fit">
           Note {index + 1}
         </h4>
       </div>
     </div>
   ));

  return (
    <div className=" shadow-md w-[20%]   ">
      <div className="flex px-7  items-center gap-6 py-8">
        <p className="text-4xl font-bold">Note</p>
        <button
          className="text-4xl px-5 py-2 text-white bg-[#4A4E74]"
          onClick={props.newNote}
        >
          +
        </button>
      </div>
      {noteElements}
    </div>

    // <div className="w-full">
    //   <div className="max-w-[600px] mx-auto shadow-md  px-8 mt-24">
    //     <div className=" flex items-center gap-6 py-8">
    //       <p className="text-4xl">Note</p>
    //       <p className="text-4xl px-2 py-1 bg-violet-700" onClick={getNumb}>
    //         +
    //       </p>
    //     </div>
    //     <div className="space-y-6">
    //       {numb.map((value, key) => {
    //         return (
    //           <p className="hover:px-4 hover:bg-violet-700 w-fit">Note{key}</p>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>

    // const [numb, setNumb] = React.useState([1]);

    // function getNumb() {
    //   setNumb((prev) => [...prev, prev + 1]);
    // }
  );
}
