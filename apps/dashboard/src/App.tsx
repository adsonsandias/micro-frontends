import "./App.css";
import { Button } from "@repo/ui/button";

// const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

function App() {
  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        // credentials: 'include', // Importante para enviar cookies
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "user", password: "password" }),
      });

      const data = await response.json();
      console.log(data);
      console.log("Login successful:", data);

      // Armazena o token no localStorage
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  // Função para verificar autenticação
  async function checkAuth() {
    try {
      const response = await fetch(`http://localhost:3000/user`, {
        credentials: "include", // Importante para enviar cookies
      });

      if (!response) {
        throw new Error("Não autenticado");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao verificar autenticação:", error);
      return { success: false };
    }
  }
  //

  async function getUserInfo() {
    const authData = await checkAuth();

    if (authData.success) {
      console.log("Usuário autenticado:", authData.username);
      // Atualizar estado/UI com as informações do usuário
    } else {
      console.log("Usuário não autenticado");
      // Redirecionar para login ou mostrar estado não logado
    }
  }

  return (
    <>
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={getUserInfo}>Buscar Dados</Button>
    </>
  );
}

export default App;
