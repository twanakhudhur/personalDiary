function EntryDetails({ entry }) {
  const { date, title, content, url } = entry;

  return (
    <dialog id={date} className="modal">
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
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-primary hover:bg-accent">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default EntryDetails;
