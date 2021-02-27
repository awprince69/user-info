import React from 'react';
import './Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    // console.log(props);
    const { name, email, phone, image, gender } = props.person
    return (
        <div className='divContainer'>
            <div className='personInfo'>
                <img src={image} alt="" />
                <p><small>{name}</small></p>
                <p><small>{gender}</small></p>
            </div>
            <div className='margin'>
                <h4 className='border '>Information</h4>
                <h5>Email</h5>
                <p className='textSpacing'><small>{email}</small></p>
                <h5>Phone</h5>
                <p className='textSpacing'><small>{phone}</small></p>
                <button onClick={() =>props.handleClick(props.person)} className='button'><FontAwesomeIcon icon={faUserPlus} /></button>
            </div>
        </div >
    );
};

export default Person; <h1>This is person</h1>