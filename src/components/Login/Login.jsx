import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Envio");
    console.log("teste", username);
    console.log("teste", password);
  };
  return (
    <div className="flex items-center justify-center h-screen bg-loginFundo bg-cover bg-center">
      <div className="w-[400px] h-auto bg-[rgb(255,255,255)] bg-opacity-15 backdrop-blur-md rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around items-center m-8"
        >
          <h1 className="font-bold text-3xl text-white m-8">
            Acesse o sistema
          </h1>

          <div className=" flex items-center h-14 m-8 w-full relative">
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setUsername(e.target.value)}
              className="flex ml-2 mb-2 rounded-3xl bg-transparent border-2 w-full h-full text-base pl-6 placeholder:text-white
outline-0"
            />
            <FaUser className="absolute right-6" />
          </div>
          <div className=" flex items-center h-14 m-8 w-full relative">
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              className="flex ml-2 mb-2 rounded-3xl bg-transparent border-2 w-full h-full text-base pl-6 placeholder:text-white outline-0"
            />
            <FaLock className="absolute right-6" />
          </div>

          <div className="flex justify-around">
            <label className="text-white mr-5">
              <input type="checkbox" />
              Lembre de mim.
            </label>
            <a href="#" className="underline">
              Esqueceu a senha?
            </a>
          </div>

          <button className="border rounded-3xl bg-slate-50 w-24 h-8 mt-4 mb-3">
            Entrar
          </button>

          <div>
            <p className="underline-offset-8">
              Não tem conta? <a href="#">Registrar</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
