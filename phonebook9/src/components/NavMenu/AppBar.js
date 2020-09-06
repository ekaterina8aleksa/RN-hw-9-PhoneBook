import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { authSelectors } from "../../redux/auth";
import styles from "../../theme/Phonebook.module.css";

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.bar}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
