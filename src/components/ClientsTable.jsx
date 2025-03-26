import { useEffect, useState } from "react";
import { getClients, deleteClient } from "../services/api";

const ClientsTable = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const data = await getClients();
    setClients(data);
  };

  const handleDelete = async (codigo) => {
    await deleteClient(codigo);
    fetchClients(); // Recargar lista
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Clients List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.codigo} className="border-t">
              <td className="p-2">{client.codigo}</td>
              <td className="p-2">{client.name}</td>
              <td className="p-2">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded"
                  onClick={() => handleDelete(client.codigo)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
