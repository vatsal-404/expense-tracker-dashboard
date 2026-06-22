function ExpenseForm({
  title,
  setTitle,
  amount,
  setAmount,
  category,
  setCategory,
  date,
  setDate,
  addExpense,
  editingId,
  cancelEdit,
}) {
  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Soft Drink">Soft Drink</option>
        <option value="Snacks">Snacks</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={addExpense}>
        {editingId ? "Update Expense" : "Add Expense"}
      </button>

      {editingId && (
        <button onClick={cancelEdit} className="delete-btn">
          Cancel
        </button>
      )}
    </div>
  );
}

export default ExpenseForm;
