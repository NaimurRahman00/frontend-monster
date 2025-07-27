import { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errUserName, setErrUserName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errConfirmPassword, setErrConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const handleValidate = (e) => {
    e.preventDefault();

    if (userName.length > 7) {
      setErrUserName("");
      setUserColor("green");
    } else {
      setErrUserName("Name must be 8 or more characters.");
      setUserColor("red");
    }

    if (email.includes('@gmail')) {
      setErrEmail("");
      setEmailColor('green');
    } else {
      setErrEmail('Email should have @gmail.');
      setEmailColor('red')
    }

    if (password.length > 7) {
      setErrPassword("");
      setPasswordColor('green')
    } else {
      setErrPassword("Password should be 8 letters long.");
      setPasswordColor('red')
    }

    if (password !== '' && password == confirmPassword) {
      setErrConfirmPassword('');
      setConfirmPasswordColor('green');
    } else {
      setErrConfirmPassword("Password didn't match!");
      setConfirmPasswordColor('red');
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form style={{ width: "20rem" }}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          value={userName}
          style={{ borderColor: userColor, padding: "5px 10px", width: "90%" }}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p style={{color: 'red', fontSize: '12px'}}>{errUserName}</p>

        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          value={email}
          style={{
            borderColor: emailColor,
            padding: "5px 10px",
            width: "90%",
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{color: 'red', fontSize: '12px'}}>{errEmail}</p>

        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          value={password}
          style={{
            borderColor: passwordColor,
            padding: "5px 10px",
            width: "90%",
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={{color: 'red', fontSize: '12px'}}>{errPassword}</p>

        <input
          type="password"
          name=""
          id=""
          placeholder="Confirm password"
          value={confirmPassword}
          style={{
            borderColor: confirmPasswordColor,
            padding: "5px 10px",
            width: "90%",
          }}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p style={{color: 'red', fontSize: '12px'}}>{errConfirmPassword}</p>

        <button
          style={{
            backgroundColor: "tomato",
            border: "none",
            padding: "5px 10px",
            width: "97%",
          }}
          onClick={handleValidate}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
