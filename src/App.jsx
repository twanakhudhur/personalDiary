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
    const sortedEntries = updatedEntries.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setEntries(sortedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(sortedEntries));
  };

  return (
    <>
      <div className="px-[5%]">
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
