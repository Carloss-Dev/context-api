import React from "react";
import { jwtDecode } from "jwt-decode";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { api } from "../services/api";

export const AuthContext = React.createContext();

export const AuthStorage = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");

  React.useEffect(() => {
    console.log(accessToken);
    if (accessToken) {
      try {
        const currentTime = new Date().getTime() / 1000;
        const decodedPayload = jwtDecode(accessToken);

        setUserData(decodedPayload);
        setIsAuth(true);

        console.log(decodedPayload);

        if (currentTime > decodedPayload.exp) {
          console.log("AccessToken expirado, atualizando com um refreshToken");
          postRefreshToken();
        }
      } catch (error) {
        console.error("Erro ao decodificar o token", error);
      }
    } else {
      console.log("Usuário não logado");
    }
  }, [accessToken]);

  const postRefreshToken = async () => {
    if (refreshToken) {
      try {
        console.log("aoba");

        const response = await api.post("/auth/refresh", {
          refreshToken,
        });

        console.log(response.data);

        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);

        console.log("Access Token atualizado com sucesso: " + accessToken);
      } catch (error) {
        console.error("Erro ao atualizar o token", error);
      }
    } else {
      console.log("Refresh token não disponível");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
