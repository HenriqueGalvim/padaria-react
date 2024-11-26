import React, {  useState } from "react";
import api from "../services/api";
import "./teste.css";

function Login(context) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      alert("Login realizado com sucesso!");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="container">
      <div className="image-background">
        <img src="assets/pao.png" alt="pão" />
      </div>
      <div className="form">
        <div className="container-form">
          <h2>Só pão - Padaria Digital</h2>
          <h5>Encomende pães fresquinhos e deliciosos na palma da sua mão!</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="Email">Email</label>
              <br />
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="Senha">Senha</label>
              <br />
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="submit" type="submit">Entrar</button>
          </form>
          <p>Ainda não tem uma conta? <a href="/register">Cadastre-se aqui</a></p>
        </div>

      </div>
    </div>
  );
}

export default Login;
