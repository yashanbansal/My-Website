
import React from 'react';
import { useState } from 'react';



  const Contact = () => {
    const [data ,setData] =useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });
 
    const InputEvent =(event) =>{
        const {name, value} = event.target;

        setData((preVal) =>{
            return {
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(
            ` Thanku Your Form Submitted Successfully. 
              Yours details are : 
              Name -> ${data.fullname}. 
              Mobile Number -> ${data.phone}. 
              Email -> ${data.email}. 
              Your Message -> ${data.msg}`
        );

    };
    // const [fullname, setfullname] = useState('');
    // const [phone, setphone] = useState('');
    // const [email, setemail] = useState('');
    // const [msg, setmsg] = useState('');
    // const InputEvent = (e) =>{
    //   setfullname(e.target.value);
    // };
    // const InputEvent1 = (e) =>{
    //   setphone(e.target.value);
    // };
    // const InputEvent2 = (e) =>{
    //   setemail(e.target.value);
    // };
    // const InputEvent3 = (e) =>{
    //   setmsg(e.target.value);
    // };
    
      
      

    // const createToDo = () =>{
    //   const todoRef =firebase.database().ref('Visiters');
    //   const todo = {
    //     fullname,
    //     phone,
    //     email,
    //     msg,
    //   };
    //   todoRef.push(todo);
    // };

    return (
    <>
    <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
    </div> 
    <div className="container contact-div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>

                
  <div className=" mb-3 ">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" 
    className="form-control" 
    id="name" 
    name="fullname" 
    value={data.fullname}  
    onChange={InputEvent} 
    placeholder="Enter Your Full Name" required/>
   
  </div>
  <div className=" mb-3 ">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="text" 
    maxLength="10" 
    className="form-control" 
    id="mob" 
    name="phone" 
    value={data.phone} 
    onChange={InputEvent} 
    placeholder="XXXXXXXXXX" required/>
  </div>
  <div className=" mb-3 ">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" 
    className="form-control" 
    id="exampleFormControlInput1" 
    name="email" 
    value={data.email} 
    onChange={InputEvent} 
    placeholder="name@example.com" required/>
  </div>
  <div className=" mb-3 ">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" 
    name="msg" 
    value={data.msg} 
    onChange={InputEvent}  
    id="exampleFormControlTextarea1" 
    rows="3" required></textarea>
  </div>
  <div className="col-10">
  <button 
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