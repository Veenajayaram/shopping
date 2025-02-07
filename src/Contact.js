import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div>
      <form className='contactform'>
    <div className='con'>
      <label>Name</label> <br></br>
      <input type="text" name="user_name" /> <br></br>
      <label>Email</label> <br></br>
      <input type="email" name="user_email" /> <br></br>
      <label>Message</label> <br></br>
      <textarea name="message" /> <br></br>
      <input type="submit" value="Send" />
    </div>
      </form>

    </div>
  )
}

export default Contact