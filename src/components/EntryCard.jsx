import { createPortal } from "react-dom";
import { useState } from "react";
import EntryDetails from "../pages/EntryDetails";

function EntryCard({ entry }) {
  const { date, title, url } = entry;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("clicked");
    setShowModal(true);
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
          className="object-scale-down"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{date}</h2>
        <p>{title}</p>
      </div>
      {showModal &&
        createPortal(
          <EntryDetails onClose={() => setShowModal(false)} entry={entry} />,
          document.getElementById("modal-root")
        )}
    </div>
  );
}

export default EntryCard;
