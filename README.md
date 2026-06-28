# Expense Tracker Dashboard

A full-stack Expense Tracker Dashboard built using React, Spring Boot, and PostgreSQL. The application allows users to manage expenses, analyze spending patterns, and visualize expense data through interactive charts.

---

## Features

### Expense Management

* Add new expenses
* Update existing expenses
* Delete expenses
* View all expenses

### Dashboard Analytics

* Total Expense Summary
* Total Transactions Count
* Total Categories Count
* Pie Chart for category-wise expense distribution
* Bar Chart for category comparison

### Search & Filtering

* Search expenses by title or category
* Filter expenses by month
* Category dropdown selection

### Additional Features

* Dark Mode with theme persistence
* CSV Export
* Responsive Design (Desktop, Tablet, Mobile)
* Form Validation

---

## Tech Stack

### Frontend

* React
* Axios
* Recharts
* CSS3

### Backend

* Spring Boot
* Spring Data JPA
* Maven

### Database

* PostgreSQL

### Tools

* IntelliJ IDEA
* Postman
* pgAdmin

---

## Project Structure

```plaintext
src/
│
├── components/
│   ├── DashboardHeader.jsx
│   ├── StatsCards.jsx
│   ├── Toolbar.jsx
│   ├── ExpenseForm.jsx
│   ├── ExpenseTable.jsx
│   └── ExpenseCharts.jsx
│
├── App.js
├── App.css
```

---

## API Endpoints

### Get All Expenses

```http
GET /api/expenses
```

### Create Expense

```http
POST /api/expenses
```

### Update Expense

```http
PUT /api/expenses/{id}
```

### Delete Expense

```http
DELETE /api/expenses/{id}
```

---

## Getting Started

### Backend

```bash
cd backend

mvn spring-boot:run
```

Backend runs on:

```plaintext
http://localhost:8080
```

### Frontend

```bash
cd frontend-new

npm install
npm start
```

Frontend runs on:

```plaintext
http://localhost:3000
```

---



## Future Enhancements

* User Authentication (JWT)
* Cloud Deployment
* Expense Budgets
* Email Reports
* Advanced Analytics

---

## Author

Developed using React, Spring Boot, and PostgreSQL as a full-stack portfolio project.
