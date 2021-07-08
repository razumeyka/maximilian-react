import React, {useState} from 'react';

	import ExpenseForm from './ExpenseForm';
	import './NewExpense.css';

	const NewExpense = (props) => {
		
		const [isEditing, setIsEditing] = useState(false);
		
		const saveExpenseDataHandler = (enteredExpenseData) => {
			const expenseData = {
				...enteredExpenseData,
				id: Math.random().toString()
			}
			
			props.onAddExpense(expenseData);
		}
		
		const startEditingHandler = event => {
			setIsEditing(true);
		}
		
		const finishEditingHandler = event => {
			setIsEditing(false);
		}
		
		return (
			<div className='new-expense'>
				{ !isEditing && <button onClick={startEditingHandler}>AddNewExpense</button>}
				{ isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onFinishEditing={finishEditingHandler}/>}
			</div>
		);
	};

export default NewExpense;