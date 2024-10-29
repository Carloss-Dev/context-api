import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Title } from "../../components/Texts/Title/Title";

export const Home = () => {
  const { isAuth, userData } = React.useContext(AuthContext);

  if (userData.email === "carlos2019cavalcante@gmail.com") {
    return <Title>HOME, Ola, administrador: {userData.email}</Title>;
  } else if (isAuth) {
    return <Title>Home, Ola: {userData.email}</Title>;
  } else {
    return (
      <Title>
        HOME, Logue em <Link to={"/"}>login</Link>{" "}
      </Title>
    );
  }
};
