import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilers from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilers />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
