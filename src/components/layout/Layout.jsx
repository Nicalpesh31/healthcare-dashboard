// Layout.jsx
import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.css';

function Layout({ children, sidebarOpen, toggleSidebar }) {
  return (
    <div className="layout">
      <Header toggleSidebar={toggleSidebar} />
      <div className="layout-content">
        <Sidebar isOpen={sidebarOpen} />
        <main className={`main-content ${sidebarOpen ? '' : 'sidebar-closed'}`}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
