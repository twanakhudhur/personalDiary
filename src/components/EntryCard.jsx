import EntryDetails from "../pages/EntryDetails";
import { useState } from "react";
import { createPortal } from "react-dom";
import { format, isToday, isYesterday } from "date-fns";

function EntryCard({ entry }) {
  const { date, title, img_url } = entry;
  const [open, setOpen] = useState(false);
  const entryDate = new Date(date);

  const getDateLabel = (date) => {
    if (isToday(date)) return `Today ${format(date, "MM-dd-yyyy")}`;
    if (isYesterday(date)) return `Yesterday ${format(date, "MM-dd-yyyy")}`;
    return format(date, "MM-dd-yyyy");
  };
  const dateLabel = getDateLabel(entryDate);

  const closeModal = () => {
    setOpen(false);
    console.log("close modal clicked");
    console.log(open);
  };

  const openModal = () => {
    setOpen(true);
    console.log("open modal clicked");
    console.log(open);
  };

  return (
    <div>
      <div
        onClick={() => openModal()}
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
      </div>
      {open &&
        createPortal(
          <EntryDetails closeModal={closeModal} entry={entry} />,
          document.body
        )}
    </div>
  );
}

export default EntryCard;
