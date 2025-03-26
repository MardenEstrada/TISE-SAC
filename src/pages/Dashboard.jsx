import { useEffect, useState } from "react";
import { 
  getClients, 
  getClientPaymentHistory, 
  getEmployees, 
  getPayments, 
  getContracts, 
  getEmployeeProductivity 
} from "../services/api";

import { 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  BriefcaseIcon, 
  DocumentTextIcon, 
  ChartBarIcon 
} from "@heroicons/react/24/solid";

import DashboardCard from "../components/DashboardCard";
import PaymentsChart from "../components/PaymentsChart";
import ClientsTable from "../components/ClientsTable";
import SideBar from "../components/Sidebar";

const Dashboard = () => {
  const [stats, setStats] = useState({
    clients: 0,
    employees: 0,
    payments: 0,
    contracts: 0,
    productivity: 0,
    paymentsData: { months: [], values: [] },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clients = await getClients();
        const employees = await getEmployees();
        const payments = await getPayments();
        const contracts = await getContracts();
        const productivity = await getEmployeeProductivity();

        // Supongo que getClientPaymentHistory devuelve pagos de clientes específicos
        const paymentHistory = await getClientPaymentHistory(1); // Código de prueba

        setStats({
          clients: clients.length,
          employees: employees.length,
          payments: payments.reduce((acc, p) => acc + p.amount, 0),
          contracts: contracts.length,
          productivity: productivity.length, // Puedes cambiar esto según la lógica real
          paymentsData: {
            months: paymentHistory.map((p) => p.month),
            values: paymentHistory.map((p) => p.amount),
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar className="w-64 flex-shrink-0" />

      {/* Contenido principal */}
      <div className="p-6 flex-1 overflow-auto">
        {/* Tarjetas de Resumen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <DashboardCard
            title="Clientes"
            value={stats.clients}
            icon={<UserGroupIcon className="w-6 h-6 text-blue-500" />}
          />
          <DashboardCard
            title="Empleados"
            value={stats.employees}
            icon={<BriefcaseIcon className="w-6 h-6 text-purple-500" />}
          />
          <DashboardCard
            title="Pagos"
            value={`$${stats.payments}`}
            icon={<CurrencyDollarIcon className="w-6 h-6 text-green-500" />}
          />
          <DashboardCard
            title="Contratos"
            value={stats.contracts}
            icon={<DocumentTextIcon className="w-6 h-6 text-yellow-500" />}
          />
          <DashboardCard
            title="Productividad"
            value={stats.productivity}
            icon={<ChartBarIcon className="w-6 h-6 text-red-500" />}
          />
        </div>

        {/* Gráfico de Pagos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PaymentsChart data={stats.paymentsData} />
        </div>

        {/* Tabla de Clientes */}
        <div className="mt-6">
          <ClientsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
