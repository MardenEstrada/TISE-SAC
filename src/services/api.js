import axios from "axios";

const API_URL = "appdemo3.azurewebsites.net";

// clientes
export const getClients = async () => {
  const res = await axios.get(`${API_URL}/Clients`);
  return res.data;
};

export const getClientById = async (codigo) => {
  const res = await axios.get(`${API_URL}/Clients/${codigo}`);
  return res.data;
};

export const createClient = async (client) => {
  const res = await axios.post(`${API_URL}/Clients`, client);
  return res.data;
};

export const updateClient = async (codigo, client) => {
  const res = await axios.put(`${API_URL}/Clients/${codigo}`, client);
  return res.data;
};

export const deleteClient = async (codigo) => {
  const res = await axios.delete(`${API_URL}/Clients/${codigo}`);
  return res.data;
};

export const getClientPaymentHistory = async (codigo) => {
  const res = await axios.get(`${API_URL}/Clients/${codigo}/payments`);
  return res.data;
};

export const getPayments = async () => {
  const res = await axios.get(`${API_URL}/Payments`);
  return res.data;
};

export const getContracts = async () => {
  const res = await axios.get(`${API_URL}/Contracts`);
  return res.data;
};

// Employee Productivity
export const getEmployeeProductivity = async () => {
  const res = await axios.get(`${API_URL}/EmployeeProductivity`);
  return res.data;
};

// Employees
export const getEmployees = async () => {
  const res = await axios.get(`${API_URL}/Employees`);
  return res.data;
};

export const getEmployeeById = async (codigo) => {
  const res = await axios.get(`${API_URL}/Employees/${codigo}`);
  return res.data;
};

export const createEmployee = async (employee) => {
  const res = await axios.post(`${API_URL}/Employees`, employee);
  return res.data;
};

export const updateEmployee = async (employee) => {
  const res = await axios.put(`${API_URL}/Employees`, employee);
  return res.data;
};

export const deleteEmployee = async (codigo) => {
  const res = await axios.delete(`${API_URL}/Employees/${codigo}`);
  return res.data;
};

// Employee Task
export const getEmployeeTaskById = async (codigo) => {
  const res = await axios.get(`${API_URL}/EmployeeTask/${codigo}`);
  return res.data;
};

// Invoices
export const getInvoices = async () => {
  const res = await axios.get(`${API_URL}/Invoices`);
  return res.data;
};

export const getInvoiceById = async (codigo) => {
  const res = await axios.get(`${API_URL}/Invoices/${codigo}`);
  return res.data;
};

export const createInvoice = async (invoice) => {
  const res = await axios.post(`${API_URL}/Invoices`, invoice);
  return res.data;
};

export const updateInvoice = async (invoice) => {
  const res = await axios.put(`${API_URL}/Invoices`, invoice);
  return res.data;
};

export const deleteInvoice = async (codigo) => {
  const res = await axios.delete(`${API_URL}/Invoices/${codigo}`);
  return res.data;
};

// Payment Details
export const getPaymentDetails = async () => {
  const res = await axios.get(`${API_URL}/PaymentDetails`);
  return res.data;
};

export const getPaymentDetailById = async (codigo) => {
  const res = await axios.get(`${API_URL}/PaymentDetails/${codigo}`);
  return res.data;
};

export const createPaymentDetail = async (paymentDetail) => {
  const res = await axios.post(`${API_URL}/PaymentDetails`, paymentDetail);
  return res.data;
};

export const updatePaymentDetail = async (paymentDetail) => {
  const res = await axios.put(`${API_URL}/PaymentDetails`, paymentDetail);
  return res.data;
};

export const deletePaymentDetail = async (codigo) => {
  const res = await axios.delete(`${API_URL}/PaymentDetails/${codigo}`);
  return res.data;
};

// Payments
export const getPaymentsData = async () => {
  const res = await axios.get(`${API_URL}/Payments`);
  return res.data;
};

export const getPaymentById = async (codigo) => {
  const res = await axios.get(`${API_URL}/Payments/${codigo}`);
  return res.data;
};

export const createPayment = async (payment) => {
  const res = await axios.post(`${API_URL}/Payments`, payment);
  return res.data;
};

export const updatePayment = async (payment) => {
  const res = await axios.put(`${API_URL}/Payments`, payment);
  return res.data;
};

export const deletePayment = async (codigo) => {
  const res = await axios.delete(`${API_URL}/Payments/${codigo}`);
  return res.data;
};

// Project Details
export const getProjectDetailsById = async (codigo) => {
  const res = await axios.get(`${API_URL}/ProjectDetails/${codigo}`);
  return res.data;
};

// Projects
export const getProjects = async () => {
  const res = await axios.get(`${API_URL}/Projects`);
  return res.data;
};

export const getProjectById = async (codigo) => {
  const res = await axios.get(`${API_URL}/Projects/${codigo}`);
  return res.data;
};

export const createProject = async (project) => {
  const res = await axios.post(`${API_URL}/Projects`, project);
  return res.data;
};

export const updateProject = async (project) => {
  const res = await axios.put(`${API_URL}/Projects`, project);
  return res.data;
};

export const deleteProject = async (codigo) => {
  const res = await axios.delete(`${API_URL}/Projects/${codigo}`);
  return res.data;
};

// Services
export const getServices = async () => {
  const res = await axios.get(`${API_URL}/Services`);
  return res.data;
};

export const getServiceById = async (codigo) => {
  const res = await axios.get(`${API_URL}/Services/${codigo}`);
  return res.data;
};

export const createService = async (service) => {
  const res = await axios.post(`${API_URL}/Services`, service);
  return res.data;
};

export const updateService = async (service) => {
  const res = await axios.put(`${API_URL}/Services`, service);
  return res.data;
};

export const deleteService = async (codigo) => {
  const res = await axios.delete(`${API_URL}/Services/${codigo}`);
  return res.data;
};

// Task History
export const getTaskHistory = async () => {
  const res = await axios.get(`${API_URL}/TaskHistory`);
  return res.data;
};

export const getTaskHistoryById = async (codigo) => {
  const res = await axios.get(`${API_URL}/TaskHistory/${codigo}`);
  return res.data;
};

export const createTaskHistory = async (taskHistory) => {
  const res = await axios.post(`${API_URL}/TaskHistory`, taskHistory);
  return res.data;
};

export const updateTaskHistory = async (taskHistory) => {
  const res = await axios.put(`${API_URL}/TaskHistory`, taskHistory);
  return res.data;
};

export const deleteTaskHistory = async (codigo) => {
  const res = await axios.delete(`${API_URL}/TaskHistory/${codigo}`);
  return res.data;
};

// Tasks
export const getTasks = async () => {
  const res = await axios.get(`${API_URL}/Tasks`);
  return res.data;
};

export const getTaskById = async (codigo) => {
  const res = await axios.get(`${API_URL}/Tasks/${codigo}`);
  return res.data;
};

export const createTask = async (task) => {
  const res = await axios.post(`${API_URL}/Tasks`, task);
  return res.data;
};

export const updateTask = async (task) => {
  const res = await axios.put(`${API_URL}/Tasks`, task);
  return res.data;
};

export const deleteTask = async (codigo) => {
  const res = await axios.delete(`${API_URL}/Tasks/${codigo}`);
  return res.data;
};

// Users
export const getUsers = async () => {
  const res = await axios.get(`${API_URL}/Users`);
  return res.data;
};

export const getUserById = async (codigo) => {
  const res = await axios.get(`${API_URL}/Users/${codigo}`);
  return res.data;
};

export const createUser = async (user) => {
  const res = await axios.post(`${API_URL}/Users`, user);
  return res.data;
};

export const updateUser = async (user) => {
  const res = await axios.put(`${API_URL}/Users`, user);
  return res.data;
};

export const deleteUser = async (codigo) => {
  const res = await axios.delete(`${API_URL}/Users/${codigo}`);
  return res.data;
};

// Weather Forecast
export const getWeatherForecast = async () => {
  const res = await axios.get(`${API_URL}/WeatherForecast`);
  return res.data;
};
