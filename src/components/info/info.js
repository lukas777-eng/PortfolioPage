import React, { useRef} from 'react'
import './info.css'
import emailjs from 'emailjs-com'


const Info = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0oe98g5', 'template_sezr34e', form.current, 'IiirsZ1iMuEH-XLVk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  // function sendEmail(e){
  //   e.PreventDefault();

  //   emailjs.sendForm('service_0oe98g5','template_sezr34e', e.target, 'IiirsZ1iMuEH-XLVk').then(res =>{alert("se a enviado correctamente")
  // console.log(res)}
  //    )
  // }

  return (
    <div className='info-container'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='info'>
          <h1>Make Contact</h1>
          <label>Name</label>
          <input type="text" id="name" name="name"></input>
          <label>Email</label>
          <input type="text" id="email" name="email"></input>
          <label>Message</label>
          <input type="text" id="email" name="email"></input>
          <button type="submit">Submit</button>
          </div>
      </form>
    </div>
  )
}

export default Info
