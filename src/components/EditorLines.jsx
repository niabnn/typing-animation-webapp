// src/components/EditorLines.jsx
import { useState, useEffect } from "react";

export default function EditorLines() {
  const [lines, setLines] = useState([
    "Hola mundo",
    "Mi nombre es Estefania",
    "Gracias por visitar mi sitio web",
  ]);

  const [currentLine, setCurrentLine] = useState("");

  const handleInputChange = (event) => setCurrentLine(event.target.value);

  const handleAddLine = (event) => {
    if (event.key === "Enter") {
      setLines([...lines, currentLine]);
      setCurrentLine("");
    }
  };

  return (
    <div id="editor-lines">
      {lines.map((line, index) => (
        <code key={index}>{line}</code>
      ))}
      <code id="input-wrapper">
        <input
          id="input-line"
          type="text"
          placeholder="Escribe aquí y presiona Enter"
          value={currentLine}
          onChange={handleInputChange}
          onKeyDown={handleAddLine}
        />
      </code>
    </div>
  );
}
