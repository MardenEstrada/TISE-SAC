import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "../services/api";

const CreateClient = () => {
  const [client, setClient] = useState({ name: "", email: "" });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validaciones básicas
    if (!client.name.trim() || !client.email.trim()) {
      setError("Todos los campos son obligatorios.");
      setIsSubmitting(false);
      return;
    }

    try {
      await createClient(client);
      navigate("/");
    } catch (err) {
      setError("Error al crear el cliente. Inténtalo nuevamente.")+ err;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Registrar Cliente</h2>

      {error && <p className="text-red-500 text-center font-semibold mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ej. Juan Pérez"
            onChange={handleChange}
            value={client.name}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ej. juan@email.com"
            onChange={handleChange}
            value={client.email}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Guardando..." : "Crear Cliente"}
        </button>
      </form>

      <button
        onClick={() => navigate("/")}
        className="w-full mt-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        🔙 Volver
      </button>
    </div>
  );
};

export default CreateClient;
