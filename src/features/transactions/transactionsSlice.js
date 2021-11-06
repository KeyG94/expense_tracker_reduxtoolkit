import { createSlice } from '@reduxjs/toolkit';
export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

/** Recieved Object
  transaction = {
  category: 'housing', 
  description: 'rent for January', 
  amount: 400, 
  id: 123
  }
 */

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(state, action) {
      const { category } = action.payload;
      //add new transaction to the state array
      state[category].push(action.payload); 
    },
    deleteTransaction(state, action){
      const { category, id } = action.payload;
      //delete specific category from the state array
      state[category] = state[category].filter(transaction => transaction.id !== id);
    }
  },
})

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);