import EntryDetails from "../pages/EntryDetails";

function EntryCard({ entry }) {
  const { date, title, url } = entry;

  const openModal = () => {
    const modalDetails = document.getElementById(date);
    modalDetails.showModal();
  };

  return (
    <div
      onClick={openModal}
      className="flex flex-row card card-compact bg-primary w-full shadow-xl p-2 hover:bg-accent cursor-pointer"
    >
      <figure className="w-36 h-28 rounded-lg">
        <img
          src={url}
          alt={`entry image for ${date}`}
          className="object-scale-down overflow-hidden rounded-lg"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{date}</h2>
        <p>{title}</p>
      </div>
      <EntryDetails entry={entry} />
    </div>
  );
}

export default EntryCard;
