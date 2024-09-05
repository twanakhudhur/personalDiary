function Header({ toggleNewEntryDialog }) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Daily Diary</a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-primary hover:bg-accent"
          onClick={() => toggleNewEntryDialog()}
        >
          New Entry
        </button>
      </div>
    </div>
  );
}

export default Header;
