import { healthIndicators } from '../../data/healthData';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-card card">
      <div className="anatomy-container">
        <div className="anatomy-image">
          <img
            src="https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Human Anatomy"
          />
          
          {healthIndicators.map((indicator) => (
            <div 
              key={indicator.id}
              className={`health-indicator ${indicator.status}`}
              style={{
                top: `${indicator.position.top}%`,
                left: `${indicator.position.left}%`
              }}
            >
              <span className="indicator-dot"></span>
              <div className="indicator-label">
                <span className="indicator-name">{indicator.name}</span>
                <span className="indicator-status">{indicator.statusText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;