function EntryDetails({ onClose, entry }) {
  console.log(`Entry Details: ${entry.title}`);

  return (
    <div className="modal">
      <div>Entry Details</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default EntryDetails;
