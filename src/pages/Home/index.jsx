import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Title } from "../../components/Texts/Title/Title";

export const Home = () => {
  const { isAuth, userData } = React.useContext(AuthContext);

  return <Title>HOME</Title>;
};
