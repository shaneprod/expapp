import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilers from './ExpenseListFilters';
import ExpenseSummary from "./ExpenseSummary";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilers />
    <ExpenseList />
    <ExpenseSummary />
  </div>
);

export default ExpenseDashboardPage;
