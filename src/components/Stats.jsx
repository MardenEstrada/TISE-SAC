const stats = [
  { id: 1, name: 'Transacciones diarias procesadas', value: '2.5 millones' },
  { id: 2, name: 'Clientes activos en nuestra plataforma', value: '850,000+' },
  { id: 3, name: 'Empresas que confían en nosotros', value: '3,200+' },
];

export default function Stats() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* TÍTULO MEJORADO */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-yellow-400 animate-fade-up">
          Impacto en cifras
        </h2>
        <p className="mt-5 text-center text-lg text-gray-300 max-w-2xl mx-auto animate-fade-up">
          Estos números reflejan la confianza y el crecimiento de nuestra comunidad.
        </p>

        {/* Contenedor de estadísticas con efecto de resalte */}
        <dl className="grid grid-cols-1 gap-x-10 gap-y-16 text-center mt-14 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4 p-6 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:brightness-125"
            >
              <dt className="text-lg text-gray-400">{stat.name}</dt>
              <dd className="order-first text-4xl font-bold tracking-tight text-yellow-400 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
