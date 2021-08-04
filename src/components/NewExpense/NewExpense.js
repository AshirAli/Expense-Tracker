import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [currentTab,setCurrentTab] = useState('AddNew');

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setCurrentTab('AddNew');
    };

    const resetDataHandler = () => {
        setCurrentTab('AddNew');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setCurrentTab('NewForm');
    };

    if(currentTab.toString() === "NewForm"){
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onResetData={resetDataHandler}/>
            </div>
        );
    }
    else{
        return (
            <div className="new-expense">
                <button onClick = {submitHandler} type="button"> Add New Expense </button>
            </div>
        );
    }
};

export default NewExpense;
