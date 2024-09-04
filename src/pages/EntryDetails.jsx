function EntryDetails({ closeModal, entry }) {
  const { date, title, content, url } = entry;

  return (
    <div onClick={() => closeModal()} id={date} className="modal">
      <div className="modal-box bg-base-200">
        <h2 className="font-bold text-lg">{date}</h2>
        <h3 className="text-lg py-4">{title}</h3>
        <p className="py-2">{content}</p>

        <figure className="rounded-lg">
          <img
            src={url}
            alt={`entry image for ${date}`}
            className="overflow-hidden rounded-lg"
          />
        </figure>

        <div className="modal-action">
          <button
            onClick={() => closeModal()}
                      
            className="btn btn-primary hover:bg-accent"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntryDetails;
