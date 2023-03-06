import {useState} from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";

export default function Editor({ currentNote, updateNote }) {
  const [selectedTab, setSelectedTab] =useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="w-[80%] h-screen text-2xl">
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={async (markdown) => {
          const html = await converter.makeHtml(markdown);
          return html;
        }}
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  );
}
