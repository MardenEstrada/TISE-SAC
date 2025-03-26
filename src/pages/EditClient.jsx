import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClientById, updateClient } from "../services/api";

const EditClient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState({ name: "", email: "" });

  useEffect(() => {
    getClientById(id).then(setClient);
  }, [id]);

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateClient(client);
    navigate("/");
  };

  return (
    <div>
      <h2>Editar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={client.name} onChange={handleChange} required />
        <input type="email" name="email" value={client.email} onChange={handleChange} required />
        <button type="submit">Actualizar Cliente</button>
      </form>
      <button onClick={() => navigate("/")}>🔙 Volver</button>
    </div>
  );
};

export default EditClient;
