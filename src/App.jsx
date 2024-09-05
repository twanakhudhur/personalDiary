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

  const checkDuplicateDate = (date) => {
    return entries.some((entry) => entry.date === date);
  };

  const addEntry = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    const sortedEntries = updatedEntries.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setEntries(sortedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(sortedEntries));
  };

  const deleteEntry = (date) => {
    const updatedEntries = entries.filter((entry) => entry.date !== date);
    setEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  return (
    <>
      <div className="px-[5%]">
        <Header toggleNewEntryDialog={toggleNewEntryDialog} />
        <Home entries={entries} deleteEntry={deleteEntry} />
      </div>
      {isNewEntryDialogOpen && (
        <NewEntry
          isNewEntryDialogOpen={isNewEntryDialogOpen}
          toggleNewEntryDialog={toggleNewEntryDialog}
          addEntry={addEntry}
          checkDuplicateDate={checkDuplicateDate}
        />
      )}
    </>
  );
}

export default App;
