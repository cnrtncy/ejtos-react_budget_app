import React from 'react';
//Code to import Budget.js
import { useState } from 'react';
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining'
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';




import { AppProvider } from './context/AppContext';
const App = () => {
    const currencies = [
        ['$', 'Dollar'],
        ['£', 'Pound'],
        ['€', 'Euro'],
        ['₹', 'Ruppee']
    ]
    const [currency, setCurrency] = useState(currencies[0])
    return (
        <AppProvider>
            <div className='container'>
                <h3 className='mt-3'>
                    Company's
                    <small className="text-body-secondary"> Budget Allocation</small>
                </h3>
                <div class="dropdown">
                    <p class="btn btn-secondary dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {currency}
                    </p>

                    <ul class="dropdown-menu">
                        {currencies.map((currency) => (
                            <li id={currency[1]} onClick={()=> setCurrency(currency)}><p class="dropdown-item">{currency}</p></li>
                        ))}
                        
                        
                    </ul>
                </div>
                <div className='container p-3 border border-dark rounded'>
                    
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <Budget currency={currency[0]}/>
                        </div>

                        <div className='col-sm'>
                            <Remaining currency={currency[0]}/>
                        </div>

                        <div className='col-sm'>
                            <ExpenseTotal currency={currency[0]}/>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-6'>
                            <ExpenseList currency={currency[0]} />
                        </div>

                        {/* <div className='col-6'>
                            <ExpenseItem />
                        </div> */}
                    </div>

                    <div className='row mb-3 d-flex justify-content-center'>
                        <div className='col-12'>
                            <AllocationForm currency={currency[0]}/>
                        </div>
                    </div>

                </div>

                          

                
            </div>
        </AppProvider>
    );
};
export default App;
