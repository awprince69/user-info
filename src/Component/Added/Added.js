import React from 'react';
import './Added.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

const Added = (props) => {
    // console.log(props);
    const add= props.add;
    const salary= add.reduce((total,amount)=>total+amount.Annual,0);
    const formatNumber =(num)=>{
        const number  = num.toFixed(0);
        return number;
    }
    return (
        <div>
            <p className='user'><FontAwesomeIcon icon={faUser}/>{add.length}</p>
            <p className='salary'>AVG. Salary: ${formatNumber(salary)}</p>
        </div>
    );
};

export default Added;