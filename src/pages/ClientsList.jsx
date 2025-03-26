import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getClients, deleteClient } from "../services/api";

const ClientsList = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const data = await getClients();
    setClients(data);
  };

  const handleDelete = async (id) => {
    await deleteClient(id);
    loadClients();
  };

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <button onClick={() => navigate("/create")}>➕ Crear Cliente</button>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {client.name} - {client.email}
            <button onClick={() => navigate(`/edit/${client.id}`)}>✏️ Editar</button>
            <button onClick={() => handleDelete(client.id)}>❌ Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsList;
