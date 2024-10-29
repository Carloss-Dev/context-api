import React from "react";
import { CgPassword } from "react-icons/cg";
import { FaApple, FaUserAstronaut } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { Paragraph } from "../../components/Texts/Paragraph/Paragraph";
import { Title } from "../../components/Texts/Title/Title";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { isAuth, singIn } = React.useContext(AuthContext);

  function handleValues({ target }) {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    if (!isAuth) {
      singIn(formData);
    }
  }

  React.useEffect(() => {
    console.log(isAuth);
    if (isAuth) {
      navigate("/home");
    }
  }, [isAuth]);

  return (
    <Container variant={"login"}>
      <Container variant={"image"} bgColor={"#f0f0f0"}></Container>
      <Container variant={"content"}>
        <Paragraph variant={"login"} position={"right"}>
          Don't have an account? <a style={{ color: "black" }}>Sign up</a>
        </Paragraph>
        <Container width={"100%"}>
          <Title variant={"login"}>Sign in</Title>
          <Paragraph variant={"login"} color={"black"}>
            Sign in with Open account
          </Paragraph>
          <Container
            borderBo={"1px solid lightgray"}
            width={"100%"}
            height={"8rem"}
            flexDirection={"row"}
            justifyContent={"space-around"}
          >
            <Button variant={"login"}>
              <FcGoogle style={{ margin: "auto 0", fontSize: "23px" }} /> Google
            </Button>
            <Button variant={"login"}>
              <FaApple style={{ margin: "auto 0", fontSize: "23px" }} />
              Apple ID
            </Button>
          </Container>
          <Paragraph variant={"login"} color={"black"} marginTop={"20px"}>
            Or continue with email address
          </Paragraph>
          <Form variant={"login"}>
            <Container variant={"input+icon"}>
              <FaUserAstronaut
                style={{
                  position: "absolute",
                  fontSize: "25px",
                  top: "7px",
                  left: "5px",
                }}
              />
              <Input
                type={"text"}
                name={"username"}
                placeholder={"Digite seu usuário"}
                value={formData.username}
                onChange={handleValues}
              />
            </Container>
            <Container variant={"input+icon"}>
              <CgPassword
                style={{
                  position: "absolute",
                  fontSize: "30px",
                  top: "7px",
                  left: "5px",
                }}
              />
              <Input
                type={"text"}
                name={"password"}
                placeholder={"Digite sua senha"}
                value={formData.password}
                onChange={handleValues}
              />
            </Container>
            <Button
              variant={"primary"}
              height={"4rem"}
              type={"submit"}
              onClick={handleLogin}
            >
              Start tranding
            </Button>
          </Form>
        </Container>
      </Container>
    </Container>
  );
};
