import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onYearSelect={filterChangedHandler}
            />
            <ExpenseChart expenses = {filteredExpenses}/>
            <ExpensesList items = {filteredExpenses}/>
        </Card>
    );
}

export default Expenses;
