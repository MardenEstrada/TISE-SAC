import { deleteClient, getClients } from "../api";
import { useEffect, useState } from "react";

const DeleteClient = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then(setClients);
  }, []);

  const handleDelete = async (id) => {
    await deleteClient(id);
    setClients(clients.filter(client => client.id !== id));
  };

  return (
    <div>
      <h2>Eliminar Cliente</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {client.name} - {client.email}
            <button onClick={() => handleDelete(client.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteClient;
