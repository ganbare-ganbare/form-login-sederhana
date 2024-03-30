import { useState } from "react";
import "./styles/App.css";

function App() {
  const [email, setEmail] = useState("admin@mail.com");
  const [password, setPassword] = useState("admin123");
  const [isLoginSuccess, setIsLoginSuccess] = useState<boolean | null>(null);

  return (
    <div className="container">
      <img src="/public/logo.png" alt="Logo" className="logo" /> 
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`email: ${email}`);
          console.log(`password: ${password}`);
          if (email === "admin@mail.com" && password === "admin123") {
            setIsLoginSuccess(true);
          } else {
            setIsLoginSuccess(false);
          }
        }}
      >
        <input
          type="email"
          placeholder="johndoe@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button" >Login</button>
      </form>
      {isLoginSuccess !== null && <Label isSuccess={isLoginSuccess} />}
    </div>
  );
}

function Label({ isSuccess }: { isSuccess: boolean }) {
  if (isSuccess) return <p>Login Berhasil</p>;
  return <p>Login Gagal</p>;
}

export default App;
