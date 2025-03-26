import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "../services/api";

const CreateClient = () => {
  const [client, setClient] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createClient(client);
    navigate("/");
  };

  return (
    <div>
      <h2>Crear Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <button type="submit">Crear Cliente</button>
      </form>
      <button onClick={() => navigate("/")}>🔙 Volver</button>
    </div>
  );
};

export default CreateClient;
