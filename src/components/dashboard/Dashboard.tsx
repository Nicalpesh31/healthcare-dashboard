import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <div className="anatomy-section-container">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="calendar-section">
          <CalendarView />
        </div>
        <div className="upcoming-section">
          <UpcomingSchedule />
        </div>
        <div className="activity-section">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;