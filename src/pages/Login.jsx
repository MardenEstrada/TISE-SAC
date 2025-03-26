import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }

      localStorage.setItem("token", data.token);
      alert("Inicio de sesión exitoso");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111827]">
      <div className="bg-[#1f2937] p-8 rounded-lg shadow-xl w-96 text-white animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-[#d8ac4d]">Iniciar sesión</h2>
        {error && <p className="text-red-400 text-center mt-2">{error}</p>}

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300">Usuario</label>
            <input
              type="text"
              className="w-full p-3 bg-[#374151] border border-transparent rounded-md focus:border-[#d8ac4d] focus:ring-2 focus:ring-[#d8ac4d] transition-all duration-300 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300">Contraseña</label>
            <input
              type="password"
              className="w-full p-3 bg-[#374151] border border-transparent rounded-md focus:border-[#d8ac4d] focus:ring-2 focus:ring-[#d8ac4d] transition-all duration-300 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d8ac4d] text-black py-3 rounded-md shadow-md font-semibold hover:bg-[#b88e3b] transition-all duration-300 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
