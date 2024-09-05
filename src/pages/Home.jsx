import EntryCard from "../components/EntryCard";

function Home({ entries }) {
  return (
    <div id="card-container" className="container grid grid-cols-1 gap-3 p-2">
      {entries.length === 0 ? (
        <p className="text-center text-lg">No entries yet. Add one now!</p>
      ) : (
        <div className="grid gap-4">
          {entries.map((entry, index) => (
            <EntryCard key={index} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
