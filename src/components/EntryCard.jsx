import EntryDetails from "../pages/EntryDetails";
import { format, isToday, isYesterday, parseISO } from "date-fns";

function EntryCard({ entry }) {
  const { date, title, img_url } = entry;

  const entryDate = parseISO(date);

  const getDateLabel = (date) => {
    if (isToday(date)) return `Today ${format(date, "MM-dd-yyyy")}`;
    if (isYesterday(date)) return `Yesterday ${format(date, "MM-dd-yyyy")}`;
    return format(date, "MM-dd-yyyy");
  };

  const dateLabel = getDateLabel(entryDate);

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
        {img_url ? (
          <img
            src={img_url}
            alt={`entry image for ${title}`}
            className="object-scale-down overflow-hidden rounded-lg"
          />
        ) : (
          <p>No Image</p>
        )}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{dateLabel}</h2>
        <p>{title}</p>
      </div>
      <EntryDetails entry={entry} dateLabel={dateLabel} />
    </div>
  );
}

export default EntryCard;
