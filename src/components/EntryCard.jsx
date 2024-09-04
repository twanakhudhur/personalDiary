function EntryCard(  {entry}  ) {
  
  const { date, title, url } = entry;

  const openModal = () => {
    console.log("clicked");
  };
  
  return (
    <div onClick={openModal} className="flex flex-row card card-compact bg-primary w-full shadow-xl p-2 hover:bg-accent cursor-pointer">
      <figure className="w-36 h-28">
        <img
          src={url}
          alt={`entry image for ${date}`}
          className="rounded-lg object-scale-down"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{date}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default EntryCard;
