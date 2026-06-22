function DashboardHeader({ darkMode, setDarkMode }) {
  return (
    <div className="dashboard-header">
      <div className="header-top">
        <div>
          <h1>Expense Tracker Dashboard</h1>
          <p>Manage and analyze your expenses</p>
        </div>

        <div className="theme-switch">
          <span>☀️</span>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>

          <span>🌙</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
