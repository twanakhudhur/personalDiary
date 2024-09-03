function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Daily Diary</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary">New Entry</button>
      </div>
    </div>
  );
}

export default Header;
