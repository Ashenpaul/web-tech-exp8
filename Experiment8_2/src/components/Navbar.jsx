const profileImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'>
       <rect width='80' height='80' fill='#4f46e5'/>
       <circle cx='40' cy='30' r='14' fill='white'/>
       <path d='M12 80 C12 55 68 55 68 80 Z' fill='white'/>
     </svg>`
  );

function Navbar({
  darkMode,
  toggleTheme,
  toggleMenu,
  search,
  setSearch,
  notifications,
  showNotifications,
  toggleNotifications,
}) {
  return (
    <nav className="navbar" id="profile">
      <div className="nav-left">
        <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">
          ☰
        </button>
        <h2>EduDashboard URK24CS1131</h2>
      </div>

      <input
        className="search-bar"
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="nav-right">
        <div className="notification-wrapper">
          <button
            className="icon-btn"
            onClick={toggleNotifications}
            aria-label="Notifications"
          >
            🔔
            {notifications.length > 0 && (
              <span className="badge">{notifications.length}</span>
            )}
          </button>

          {showNotifications && (
            <div className="dropdown">
              {notifications.map((note, index) => (
                <p key={index}>{note}</p>
              ))}
            </div>
          )}
        </div>

        <button className="btn" onClick={toggleTheme}>
          {darkMode ? "Light" : "Dark"}
        </button>

        <img className="avatar" src={profileImage} alt="Student profile" />
      </div>
    </nav>
  );
}

export default Navbar;