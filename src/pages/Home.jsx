import EntryCard from "../components/EntryCard";

function Home() {
  return (
  <div className="container grid grid-cols-1 gap-3 p-2">
    {/* Get entries from local storage */}
    <EntryCard />
    <EntryCard />
    <EntryCard />
  </div>
  );
}

export default Home;
