// import React from 'react';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from './Firebase';
// import { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from './Context/Context';
// import { useContext } from 'react';

// const SignUp = () => {
//     const mailRef = useRef(null);
//     const passRef = useRef(null);
//     const nameRef = useRef(null);
//     const navigate = useNavigate();
//     const ctx = useContext(UserContext);
//     const setName = ctx.setName;

//     async function onSignInput() {
//         const email = mailRef.current.value;
//         const password = passRef.current.value;
//         const name = nameRef.current.value;

//         if (!validateEmail(email)) {
//             alert("Please enter a valid email address.");
//             return;
//         }

//         try {
//             const result = await createUserWithEmailAndPassword(auth, email, password);
//             console.log(result);
//             setName(name);
//             navigate("/");
//         } catch (error) {
//             console.error("Error signing up:", error.message);
//             // Handle error (e.g., display an error message to the user)
//         }
//     }

//     function validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     }

//     return (
//         <div style={{ textAlign: 'center', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//             <input type="email" placeholder="Email" ref={mailRef} style={inputStyle} />
//             <input type="password" placeholder="Password" ref={passRef} style={inputStyle} />
//             <input type="text" placeholder="Name" ref={nameRef} style={inputStyle} />
//             <button onClick={onSignInput} style={buttonStyle}>Sign Up</button>
//         </div>
//     );
// };

// // Inline styles
// const inputStyle = {
//     margin: '10px',
//     padding: '8px',
//     width: '250px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Adding box shadow
// };

// const buttonStyle = {
//     margin: '10px',
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Adding box shadow
// };

// export default SignUp;
