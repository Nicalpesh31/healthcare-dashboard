import { BarChart2 } from 'lucide-react';
import { activityData } from '../../data/activityData';
import './ActivityFeed.css';

function ActivityFeed() {
  const maxValue = Math.max(...activityData.map(item => item.value));

  return (
    <div className="activity-feed card">
      <div className="activity-header">
        <div className="activity-icon">
          <BarChart2 size={20} />
        </div>
        <h2>Activity</h2>
      </div>

      <div className="activity-content">
        <p className="activity-summary">
          <span className="highlight">{activityData.length}</span> appointments on this week
        </p>

        <div className="activity-chart">
          {activityData.map((item, index) => (
            <div key={`${item.day}-${index}`} className="chart-column">
              <div className="chart-bar-container">
                <div
                  className="chart-bar"
                  style={{
                    height: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: item.isHighlight ? 'var(--primary-color)' : 'var(--primary-light)',
                  }}
                ></div>
              </div>
              <div className="chart-label">{item.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
