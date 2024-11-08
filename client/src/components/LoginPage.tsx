import { useState } from "react";
function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserName("");
    setPassword("");
  };
  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit}>
        <div className="label1">
          <label htmlFor="identifiant">Identifiant</label>
          <input
            id="identifiant"
            type="text"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="label2">
          <label htmlFor="mdp">Mot de passe</label>
          <input
            id="mdp"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="Homebutton">
          Se Connecter
        </button>
      </form>
    </div>
  );
}
export default LoginPage;
