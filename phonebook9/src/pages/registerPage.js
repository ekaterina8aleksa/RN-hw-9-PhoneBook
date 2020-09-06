import React, { useState } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from "../theme/Phonebook.module.css";
import classNames from "classnames";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassvord = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classNames(styles.container, styles.registration)}>
      <h1>✧◝(⁰▿⁰)◜✧</h1>

      <form
        className={styles.formDecor}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={styles.leftDecoration}></div>
        <div className={styles.rightDecoration}></div>
        <div className={styles.circle}></div>
        <div className={styles.formInner}>
          <h3>Registration</h3>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Username"
          ></input>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Email"
          ></input>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassvord}
            placeholder="Password"
          ></input>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

// class RegisterPage extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div className={classNames(styles.container, styles.registration)}>
//         <h1>✧◝(⁰▿⁰)◜✧</h1>

//         <form
//           className={styles.formDecor}
//           autoComplete="off"
//           onSubmit={this.handleSubmit}
//         >
//           <div className={styles.leftDecoration}></div>
//           <div className={styles.rightDecoration}></div>
//           <div className={styles.circle}></div>
//           <div className={styles.formInner}>
//             <h3>Registration</h3>
//             <input
//               className={styles.input}
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//               placeholder="Username"
//             ></input>
//             <input
//               className={styles.input}
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//               placeholder="Email"
//             ></input>
//             <input
//               className={styles.input}
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//               placeholder="Password"
//             ></input>
//             <button type="submit" className={styles.button}>
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterPage);
