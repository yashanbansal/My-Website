
import React from 'react';
import { useState } from 'react';
import { db } from "./firebase.jsx";


  const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("Visiters")
        .add({
          name: name,
          email: email,
          phone: phone,
          message: message,
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    };
   

    return (
    <>
    <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
    </div> 
    <div className="container contact-div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={handleSubmit}>

                
  <div className=" mb-3 ">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" 
    className="form-control" 
    id="name" 
    name="fullname" 
    value={name}  
    onChange={(e) => setName(e.target.value)} 
    placeholder="Enter Your Full Name" required/>
   
  </div>
  <div className=" mb-3 ">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="text" 
    maxLength="10" 
    className="form-control" 
    id="mob" 
    name="phone" 
    value={phone} 
    onChange={(e) => setPhone(e.target.value)} 
    placeholder="XXXXXXXXXX" required/>
  </div>
  <div className=" mb-3 ">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" 
    className="form-control" 
    id="exampleFormControlInput1" 
    name="email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} 
    placeholder="name@example.com" required/>
  </div>
  <div className=" mb-3 ">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" 
    name="msg" 
    value={message} 
    onChange={(e) => setMessage(e.target.value)}  
    id="exampleFormControlTextarea1" 
    rows="3" required></textarea>
  </div>
  <div className="col-10">
  <button 
  style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)"}}
  className="btn btn-outline-primary mb-2">Submit Form</button>
  </div>
</form>

            </div>
        </div>
    </div>
    </>
    );
 }

export default Contact;
