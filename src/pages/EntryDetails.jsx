function EntryDetails({ closeModal, entry, dateLabel }) {
  const { date, title, content, img_url } = entry;

  return (
    <div id={date} className="modal">
      <div className="modal-box bg-base-200">
        <h3 className="text-lg font-bold capitalize">{title}</h3>
        <h2 className="text-gray-700 font-semibold text-sm">{dateLabel}</h2>
        <p className="py-4 italic dateLabel font-semibold">{content}</p>

        <figure className="rounded-lg">
          {img_url ? (
            <img
              src={img_url}
              alt={`entry image for ${title}`}
              className="w-full h-48 object-scale-down overflow-hidden rounded-lg"
            />
          ) : (
            <p className=" font-semibold text-error">No Image</p>
          )}
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
