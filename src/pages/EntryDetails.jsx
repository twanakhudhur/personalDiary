import { format } from "date-fns";
function EntryDetails({ entry, dateLabel }) {
  const { date, title, content, img_url } = entry;

  return (
    <dialog id={date} className="modal">
      <div className="modal-box bg-base-200">
        <h3 className="text-lg font-bold capitalize">{title}</h3>
        <h2 className="text-gray-700">{dateLabel}</h2>
        <article className="py-4 prose italic tracking-widest font font-semibold">
          {content}
        </article>

        <figure className="rounded-lg">
          {img_url ? (
            <img
              src={img_url}
              alt={`entry image for ${title}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <p className="text-error">No Image</p>
          )}
        </figure>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary hover:bg-accent">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default EntryDetails;
