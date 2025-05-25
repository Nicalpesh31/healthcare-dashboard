// Header.jsx
import { Search, Bell, Plus } from 'lucide-react';
import './Header.css';

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="logo">Healthcare.</h1>
      </div>

      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="header-right">
        <button className="icon-button notification-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        <button className="add-button">
          <Plus size={20} />
        </button>
        <div className="user-profile">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="User"
            className="avatar"
          />
          <span className="user-name">John Doe</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
