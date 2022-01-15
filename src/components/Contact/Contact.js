import React from 'react';
import SendMessage from '../SendMessage/SendMessage';
import './Contact.css';

const Contact = (props) => {
  return (
    <div>
      <h2>Have you any questions?</h2>
      <p>Please send us mail message on e-mail address: <strong>mariusz.pawlus95@gmail.com</strong></p>

      <SendMessage></SendMessage>
    </div>
  );
}

export default Contact;
