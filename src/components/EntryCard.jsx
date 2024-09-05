import EntryDetails from "../pages/EntryDetails";
import { useState } from "react";
import { format, isToday, isYesterday } from "date-fns";

function EntryCard({ entry }) {
  const { date, title, img_url } = entry;
  const [open, setOpen] = useState(false);
  const entryDate = new Date(date);

  const dateFormatOptionStandard = { year: "numeric", month: "long", day: "numeric" };
  const dateFormatOptionWeekday = { weekday: "long", year: "numeric", month: "long", day: "numeric" };


  const getDateLabel = (date) => {
    const dateFormattedStandard = new Intl.DateTimeFormat("en-US", dateFormatOptionStandard).format(date);
    const dateFormattedWeekday = new Intl.DateTimeFormat("en-US", dateFormatOptionWeekday).format(date);

    if (isToday(date)) return `Today, ${dateFormattedStandard}`;
    if (isYesterday(date)) return `Yesterday, ${dateFormattedStandard}`;
    return dateFormattedWeekday;
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
      {open && <EntryDetails closeModal={closeModal} entry={entry} dateLabel={dateLabel}/>}
    </div>
  );
}

export default EntryCard;
