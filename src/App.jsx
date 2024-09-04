import { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  // empty array OR get from local storage
  // somewhere needs to be a sorting mechanism (before saving or when loading)
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("diaryEntries")) || []
  );

  const testEntryOne = {
    date: "2024-09-02",
    title: "First Entry",
    content: "This is my first daily diary entry.",
    url: "https://cataas.com/cat/orange",
  };
  const testEntryTwo = {
    date: "2024-09-01",
    title: "Second Entry",
    content: "This is the second entry.",
    url: "https://cataas.com/cat/black",
  };

  const testEntries = [testEntryOne, testEntryTwo];

  // For testing purposes, setting of test entries at the start
  useEffect(() => {
    setEntries(...entries, testEntries);
  }, []);
  // console.log(entries);

  return (
    <>
      <div id="modal-root">
        <Header setEntries={setEntries} />
        <Home entries={entries} />
      </div>
    </>
  );
}

export default App;
