// Sidebar.jsx
import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarClock,
  BarChart2,
  FlaskRound as Flask,
  MessageSquare,
  HelpCircle,
  Settings
} from 'lucide-react';
import { navigationLinks } from '../../data/navigationLinks';
import './Sidebar.css';

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h3>General</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.id} className={link.active ? 'active' : ''}>
              <a href={link.url} className="nav-link">
                {getIcon(link.icon)}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function getIcon(iconName) {
  const iconProps = { size: 20 };

  switch (iconName) {
    case 'dashboard':
      return <LayoutDashboard {...iconProps} />;
    case 'history':
      return <History {...iconProps} />;
    case 'calendar':
      return <Calendar {...iconProps} />;
    case 'appointments':
      return <CalendarClock {...iconProps} />;
    case 'statistics':
      return <BarChart2 {...iconProps} />;
    case 'tests':
      return <Flask {...iconProps} />;
    case 'chat':
      return <MessageSquare {...iconProps} />;
    case 'support':
      return <HelpCircle {...iconProps} />;
    case 'settings':
      return <Settings {...iconProps} />;
    default:
      return <LayoutDashboard {...iconProps} />;
  }
}

export default Sidebar;
