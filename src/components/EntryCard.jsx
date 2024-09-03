function EntryCard() {
  return (
    <div className="flex flex-row card card-compact bg-base-100 w-full shadow-xl p-2">
      <figure>
        <img
          src="https://placehold.co/200x150"
          alt="entry image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Date of Entry</h2>
        <p>Title of Entry</p>
      </div>
    </div>
  );
}

export default EntryCard;
