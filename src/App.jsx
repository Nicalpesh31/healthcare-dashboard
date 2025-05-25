// App.jsx
import { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Layout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
      <Dashboard />
    </Layout>
  );
}

export default App;
