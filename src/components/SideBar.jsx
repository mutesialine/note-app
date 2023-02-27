import React from "react";
export default function SideBar() {
  const [numb, setNumb] = React.useState([1]);

  function getNumb() {
    setNumb((prev) => [...prev, prev + 1]);
  }
  return (
    <div className="w-full">
      <div className="max-w-[600px] mx-auto shadow-md  px-8 mt-24">
        <div className=" flex items-center gap-6 py-8">
          <p className="text-4xl">Note</p>
          <p className="text-4xl px-2 py-1 bg-violet-700" onClick={getNumb}>
            +
          </p>
        </div>
        <div className="space-y-6">
          {numb.map((value, key) => {
            return (
              <p className="hover:px-4 hover:bg-violet-700 w-fit">Note{key}</p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
