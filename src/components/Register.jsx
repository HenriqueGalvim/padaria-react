import React, { useState } from "react";
import api from "../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="container">
      <div className="form">
        <div className="container-form"></div>
        <form onSubmit={handleSubmit}>
          <div className="voltar">
            <img src="" alt="" />
          <a href="../">Voltar</a>
          </div>

          <h2>Crie a sua conta</h2>
          <h5>Garanta seu acesso aos melhores pães e produtos fresquinhos!</h5>
          <div className="form-input2 input">
            <label htmlFor="Email">Nome e Sobrenome</label>
            <br />
            <input
              type="text"
              placeholder="Digite seu Nome e Sobrenome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-input2 input">
            <label htmlFor="Email">Email</label>
            <br />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-input2 input">
            <label htmlFor="Email">Senha</label>
            <br />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="cadastrar">Cadastrar</button>
        </form>
      </div>
      <div className="image-background">
        <img src="assets/pao.png" alt="pão" />
      </div>
    </div>
  );
}

export default Register;
