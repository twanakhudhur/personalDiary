import EntryCard from "../components/EntryCard";

function Home({ entries }) {
  // console.log(entries);
  
  return (
    <div id="card-container" className="container grid grid-cols-1 gap-3 p-2">
      {entries.map((entry, index) => (       
        <EntryCard key={index} entry={entry} />
      ))}
    </div>
  );
}

export default Home;
