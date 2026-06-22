import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import DashboardHeader from "./components/DashboardHeader";
import StatsCards from "./components/StatsCards";
import Toolbar from "./components/Toolbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseCharts from "./components/ExpenseCharts";

const API_URL =
  "https://expense-tracker-backend-evm1.onrender.com/api/expenses";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );
  const [selectedMonth, setSelectedMonth] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const addExpense = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }
    if (editingId) {
      axios
        .put(`${API_URL}/${editingId}`, {
          title,
          amount: Number(amount),
          category,
          date,
        })
        .then((response) => {
          setExpenses(
            expenses.map((expense) =>
              expense.id === editingId ? response.data : expense,
            ),
          );

          setEditingId(null);

          setTitle("");
          setAmount("");
          setCategory("");
          setDate("");
        });
    } else {
      axios
        .post(`${API_URL}`, {
          title,
          amount: Number(amount),
          category,
          date,
        })
        .then((response) => {
          setExpenses([...expenses, response.data]);

          setTitle("");
          setAmount("");
          setCategory("");
          setDate("");
        });
    }
  };

  const deleteExpense = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const startEdit = (expense) => {
    setEditingId(expense.id);

    setTitle(expense.title);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDate(expense.date);
  };
  const cancelEdit = () => {
    setEditingId(null);

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const filteredExpenses = expenses.filter((expense) => {
    const matchesMonth =
      !selectedMonth || expense.date.startsWith(selectedMonth);

    const matchesSearch =
      expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesMonth && matchesSearch;
  });

  const chartData = Object.values(
    filteredExpenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = {
          category: expense.category,
          amount: 0,
        };
      }

      acc[expense.category].amount += expense.amount;

      return acc;
    }, {}),
  );
  const exportToCSV = () => {
    const headers = ["Title", "Amount", "Category", "Date"];

    const rows = filteredExpenses.map((expense) => [
      expense.title,
      expense.amount,
      expense.category,
      expense.date,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "expenses.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#06B6D4",
  ];

  const totalTransactions = expenses.length;

  const totalCategories = new Set(expenses.map((e) => e.category)).size;

  return (
    <div className={darkMode ? "app-container dark" : "app-container"}>
      {" "}
      <DashboardHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <StatsCards
        totalExpenses={totalExpenses}
        totalTransactions={totalTransactions}
        totalCategories={totalCategories}
      />
      <Toolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        exportToCSV={exportToCSV}
      />
      <ExpenseForm
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        date={date}
        setDate={setDate}
        addExpense={addExpense}
        editingId={editingId}
        cancelEdit={cancelEdit}
      />
      <ExpenseTable
        expenses={filteredExpenses}
        startEdit={startEdit}
        deleteExpense={deleteExpense}
      />
      <ExpenseCharts chartData={chartData} COLORS={COLORS} />
    </div>
  );
}

export default App;
