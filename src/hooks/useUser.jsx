import React from "react";
import { api } from "../services/api";
import { useLocalStorage } from "./useLocalStorage";

export const useUsers = () => {
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");
  const [users, setUsers] = React.useState();
  const [user, setUser] = React.useState();
  const getUsers = async () => {
    try {
      const { data } = await api.get(`/users`);
      console.log(data);

      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentAuthUser = async () => {
    try {
      console.log(accessToken);
      if (accessToken) {
        const { data } = await api.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(data);
      } else console.log(accessToken);
    } catch (error) {
      console.error("Erro em pegar o usuário autenticado: ", error);
    }
  };

  const loginUser = async (userData) => {
    try {
      const { username, password } = userData;
      const tokenData = await api.post("/auth/login", {
        username,
        password,
        expiresInMins: 30,
      });

      console.log(tokenData);

      setAccessToken(JSON.stringify(tokenData.data.accessToken));
      setRefreshToken(JSON.stringify(tokenData.data.refreshToken));

      console.log("Usuário logado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  return { users, getUsers, loginUser, getCurrentAuthUser };
};
