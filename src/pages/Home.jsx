import EntryCard from "../components/EntryCard";

function Home({ entries }) {
  return (
    <div className="container grid grid-cols-1 gap-3 p-2">
      {entries?.length === 0 && (
        <div className="text-center text-2xl font-semibold text-warning mt-16">
          No entries yet. Add one now!
        </div>
      )}
      {
        entries?.map((entry, index) => <EntryCard key={index} entry={entry} />)}
    </div>
  );
}

export default Home;