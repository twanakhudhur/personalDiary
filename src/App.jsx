import { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import NewEntry from "./pages/NewEntry";

function App() {
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("diaryEntries")) || []
  );
  const [isNewEntryDialogOpen, setNewEntryDialogOpen] = useState(false);
  const toggleNewEntryDialog = () => {
    setNewEntryDialogOpen((prev) => !prev);
  };

  const addEntry = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  return (
    <>
      <div id="modal-root">
        <Header toggleNewEntryDialog={toggleNewEntryDialog} />
        <Home entries={entries} />
      </div>
      {isNewEntryDialogOpen && (
        <NewEntry
          isNewEntryDialogOpen={isNewEntryDialogOpen}
          toggleNewEntryDialog={toggleNewEntryDialog}
          addEntry={addEntry}
        />
      )}
    </>
  );
}

export default App;
