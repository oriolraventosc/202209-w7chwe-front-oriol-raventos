import React from "react";
import "@fontsource/roboto";
import "./App.css";
import UsersList from "./components/UsersList/UsersList";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-header">
        <span className="page-header__subtitle">
          In search of new friends or enemies
        </span>
        <span className="page-header__title">Discover new people</span>
      </div>
      <UsersList />
    </div>
  );
}

export default App;
