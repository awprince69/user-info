import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Person from '../Person/Person';
import './User.css'
import user from '../../fakedata/MOCK_DATA15 .json'
import Added from '../Added/Added';

const User = () => {
    const [person, setPerson] = useState([])
    const [add,setAdd] = useState([])
    const handleClick = (person) => {
        const addPerson = [...add,person];
        setAdd(addPerson);
    }
    useEffect(() => {
        setPerson(user)
        // console.log(user);
    }, [])
    return (
        <div className='user-container'>
            <div className='user-info'>
                {
                    person.map(per => <Person person={per} key={per.id} handleClick={handleClick}></Person>)
                }
            </div>
            <div className='Container'>
                <Added add={add}></Added>
            </div>

        </div>
    );
};

export default User; <h1>This is User</h1>