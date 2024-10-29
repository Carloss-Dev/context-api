import React from "react";
import { jwtDecode } from "jwt-decode";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthStorage = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");

  React.useEffect(() => {
    if (accessToken) {
      try {
        const currentTime = new Date().getTime() / 1000;
        const decodedPayload = jwtDecode(accessToken);
        setUserData(decodedPayload);
        setIsAuth(true);

        console.log("Usuário com token ativo");
        if (currentTime > decodedPayload.exp) {
          console.log("AccessToken expirado, atualizando com um refreshToken");
          postRefreshToken();
        }
      } catch (error) {
        console.error("Erro ao decodificar o token: ", error);
      }
    } else {
      setIsAuth(false);
      navigate("/");
      console.log("Usuário não logado!");
    }
  }, [accessToken]);

  const singIn = async (userData) => {
    try {
      const { username, password } = userData;
      const { data } = await api.post("/auth/login", {
        username,
        password,
        expiresInMins: 30,
      });

      setAccessToken(JSON.stringify(data.accessToken));
      setRefreshToken(JSON.stringify(data.refreshToken));

      console.log("Usuário logado com sucesso, redirecionando...");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const postRefreshToken = async () => {
    if (refreshToken) {
      try {
        const { data } = await api.post("/auth/refresh", {
          refreshToken,
        });

        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);
      } catch (error) {
        console.error("Erro ao atualizar o token: ", error);
      }
    } else {
      console.log("Refresh token não disponível");
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, userData, setUserData, singIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
