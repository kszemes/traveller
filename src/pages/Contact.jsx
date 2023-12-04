import React, {useState} from 'react';
import {ContactData} from "../ContactData.class.js";

export const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const timestamp = Date.now();
        const newMessage = new ContactData(timestamp, email, message);
        console.log(newMessage)
    }
    return (
        <div className='components-container'>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='emailAddress'>Email</label>
                <input value={email} id='emailAddress' type='text' required
                       onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <label htmlFor='message'>Your Message</label>
                <textarea value={message} id='message' cols='30' rows='10' required
                          onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};
