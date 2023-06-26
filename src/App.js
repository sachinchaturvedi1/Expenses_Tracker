import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


let DUMMY_EXPENSE = [];

const App = () => {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

   

const addExpenseHandler =(expense)=>{
    console.log(expense);
    const updatedExpense=[expense,...expenses];
   
    setExpenses(updatedExpense);
};

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>    
    );
}

export default App;
