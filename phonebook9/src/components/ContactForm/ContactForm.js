import React, { useState } from "react";
import { connect } from "react-redux";
import { contactsOperations } from "../../redux/contacts";
import { ToastContainer, toast } from "react-toastify";
import styles from "../../theme/Phonebook.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ToastContainer />
      <h2>PhoneBook</h2>
      <form className={styles.formContacts} onSubmit={handleSubmitContact}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name..."
            value={name}
            onChange={handleChangeName}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Phone Number
          <input
            type="tel"
            name="number"
            placeholder="Enter number..."
            value={number}
            onChange={handleChangeNumber}
            className={styles.input}
          />
        </label>

        <label>
          <button type="submit" className={styles.button}>
            Add Contact
          </button>
        </label>
      </form>
    </>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handelChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, number } = this.state;
//     const { contacts } = this.props;

//     const isExist = contacts.some(
//       (contact) =>
//         contact.name.trim().toLowerCase() === name.trim().toLowerCase()
//     );
//     const invalide = isNaN(number);

//     if (name.length === 0 || number.length === 0) {
//       toast.warn(`Fill the form, please ＼(°o°)／ `);
//     } else if (isExist) {
//       toast.info(`${name} already exist (〒﹏〒) `);
//     } else if (invalide) {
//       toast.info(`${number} is invalide phone number 乁( •_• )ㄏ `);
//     } else {
//       toast.success(" (๑˙❥˙๑) You added new contact!");
//       this.props.onSubmit(this.state);
//     }
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <>
//         <ToastContainer />
//         <h2>PhoneBook</h2>
//         <form className={styles.formContacts} onSubmit={this.handleSubmit}>
//           <label className={styles.label}>
//             Name
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter name..."
//               value={this.state.name}
//               onChange={this.handelChange}
//               className={styles.input}
//             />
//           </label>

//           <label className={styles.label}>
//             Phone Number
//             <input
//               type="tel"
//               name="number"
//               placeholder="Enter number..."
//               value={this.state.number}
//               onChange={this.handelChange}
//               className={styles.input}
//             />
//           </label>

//           <label>
//             <button type="submit" className={styles.button}>
//               Add Contact
//             </button>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   contacts: state.contacts.items,
// });
// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) =>
//     dispatch(contactsOperations.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
