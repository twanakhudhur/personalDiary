import EntryDetails from "../pages/EntryDetails";
import { useState } from "react";
import { isToday, isYesterday } from "date-fns";

function EntryCard({ entry, deleteEntry }) {
  const { date, title, img_url } = entry;
  const [open, setOpen] = useState(false);
  const entryDate = new Date(date);

  const dateFormatOptionStandard = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormatOptionWeekday = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const getDateLabel = (date) => {
    if (isToday(date))
      return `Today, ${new Intl.DateTimeFormat(
        "en-US",
        dateFormatOptionStandard
      ).format(date)}`;
    if (isYesterday(date))
      return `Yesterday, ${new Intl.DateTimeFormat(
        "en-US",
        dateFormatOptionStandard
      ).format(date)}`;

    const dateFormattedWeekday = new Intl.DateTimeFormat(
      "en-US",
      dateFormatOptionWeekday
    ).format(date);
    return dateFormattedWeekday;
  };
  const dateLabel = getDateLabel(entryDate);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
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

      {open && (
        <EntryDetails
          closeModal={closeModal}
          entry={entry}
          dateLabel={dateLabel}
          deleteEntry={deleteEntry}
        />
      )}
    </div>
  );
}

export default EntryCard;
