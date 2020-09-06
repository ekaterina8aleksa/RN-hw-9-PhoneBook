import React, { useState } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from "../theme/Phonebook.module.css";
import classNames from "classnames";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classNames(styles.container, styles.authorization)}>
      <h1>(✯ᴗ✯)</h1>

      <form
        className={styles.formDecor}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={styles.leftDecoration}></div>
        <div className={styles.rightDecoration}></div>
        <div className={styles.circle}></div>
        <div className={styles.formInner}>
          <h3>Authorization</h3>

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
            onChange={handleChangePassword}
            placeholder="Password"
          ></input>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
// class LoginPage extends Component {
//     state = {
//         email: "",
//         password: "",
//     };

//     handleChange = ({ target: { name, value } }) => {
//         this.setState({ [name]: value });
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();

//         this.props.onLogin(this.state);

//         this.setState({ email: "", password: "" });
//     };

//     render() {
//         const { email, password } = this.state;

//         return (
//             <div className={classNames(styles.container, styles.authorization)}>
//                 <h1>(✯ᴗ✯)</h1>

//                 <form
//                     className={styles.formDecor}
//                     autoComplete="off"
//                     onSubmit={this.handleSubmit}
//                 >
//                     <div className={styles.leftDecoration}></div>
//                     <div className={styles.rightDecoration}></div>
//                     <div className={styles.circle}></div>
//                     <div className={styles.formInner}>
//                         <h3>Authorization</h3>

//                         <input
//                             className={styles.input}
//                             type="email"
//                             name="email"
//                             value={email}
//                             onChange={this.handleChange}
//                             placeholder="Email"
//                         ></input>
//                         <input
//                             className={styles.input}
//                             type="password"
//                             name="password"
//                             value={password}
//                             onChange={this.handleChange}
//                             placeholder="Password"
//                         ></input>
//                         <button type="submit" className={styles.button}>
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
// const mapDispatchToProps = {
//     onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginPage);
