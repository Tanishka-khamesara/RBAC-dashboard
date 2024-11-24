import './form.css';
import { UserContext } from '../Context/Context';
import { useContext, useRef } from 'react';

function ProfileForm() {
    const ctx = useContext(UserContext);
    const useCtx = ctx.colors;
    const detailctx = ctx.details;
    const setDetailsctx = ctx.setDetails;
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const contactRef = useRef(null);
    const AddressRef = useRef(null);
    const ageRef = useRef(null);
    const dateRef = useRef(null);
    const handleSubmit = ((e) => {
        e.preventDefault();
        let inputname = nameRef.current.value;
        let  email = emailRef.current.value;
        let  contact = contactRef.current.value;
        let  Address = AddressRef.current.value;
        let  age = ageRef.current.value;
        let  date = dateRef.current.value;

        const newUser = { inputname, email, contact,Address,age,date };
        alert(`Name: ${inputname}, Email: ${email}, Phone: ${contact},Address:${Address},age:${age},date:${date}`);
        inputname=""
email = ""
contact =""
Address =""
age = ""
date = ""
    })
    return (
        <div class="formcontainer">
            <h1>CREATE USER</h1>
            <p style={{ color: useCtx.forwordsgreen }}>Create a New User Profile</p>
            {console.log(detailctx)}
            <form onSubmit={handleSubmit}>
            <div>
                    <input type="text" ref={nameRef} required placeholder="FullName" name="firstname" />
                    <input type="email" ref={emailRef} required placeholder='Email' />
                    <input type="number" ref={contactRef} required placeholder='Contact Number' />
                <input type="text" ref={AddressRef} required placeholder='Address' />
                <div class="name"> 
                    <input type="date" ref={dateRef} required placeholder=""  />
                    <input type="number" ref={ageRef} required placeholder="Age"/>
                </div>
            </div>
            <button className='btn' type="submit">Create New User</button>
            </form>
        </div>
    )
}
export default ProfileForm;