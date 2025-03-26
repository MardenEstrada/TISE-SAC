const DashboardCard = ({ title, value, icon }) => {
    return (
      <div className="bg-white p-6 shadow-md rounded-lg flex items-center">
        <div className="text-blue-500 text-4xl">{icon}</div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
    );
  };
  
  export default DashboardCard;
  