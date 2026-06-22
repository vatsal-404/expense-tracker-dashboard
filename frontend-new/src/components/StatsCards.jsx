function StatsCards({ totalExpenses, totalTransactions, totalCategories }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Expenses</h3>
        <h1>₹ {totalExpenses}</h1>
      </div>

      <div className="stat-card">
        <h3>Transactions</h3>
        <h1>{totalTransactions}</h1>
      </div>

      <div className="stat-card">
        <h3>Categories</h3>
        <h1>{totalCategories}</h1>
      </div>
    </div>
  );
}

export default StatsCards;
