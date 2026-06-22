function Toolbar({
  searchTerm,
  setSearchTerm,
  selectedMonth,
  setSelectedMonth,
  exportToCSV,
}) {
  return (
    <div
      className="toolbar"
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search by title or category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <input
        type="month"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="month-input"
      />

      <button onClick={exportToCSV} className="export-btn">
        📄 Export CSV
      </button>
    </div>
  );
}

export default Toolbar;
