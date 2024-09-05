function EntryDetails({ closeModal, entry, dateLabel, deleteEntry }) {
  const { date, title, content, img_url } = entry;

  const handleDelete = () => {
    deleteEntry(date);
    closeModal();
  };

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

        <div className="modal-action justify-between">
          <button className="btn btn-circle btn-outline" 
          onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"
              ></path>
            </svg>
          </button>
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
