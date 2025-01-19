// src/App.jsx
import EditorHeader from "./components/EditorHeader";
import EditorLines from "./components/EditorLines";
import ThemeToggleButton from "./components/ThemeToggleButton";
import RefreshButton from "./components/RefreshButton";

function App() {
  return (
    <div className="bg-white text-black">
      <div id="editor">
        <EditorHeader />
        <EditorLines />
      </div>
      <div className="absolute bottom-5 left-5 flex space-x-4">
        <ThemeToggleButton />
        <RefreshButton />
      </div>
    </div>
  );
}

export default App;
