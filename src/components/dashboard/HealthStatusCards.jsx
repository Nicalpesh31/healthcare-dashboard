// HealthStatusCards.jsx
import { healthStatusCards } from '../../data/healthData';
import './HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthStatusCards.map((card) => (
        <div key={card.id} className={`health-status-card card ${card.status}`}>
          <div className="status-icon">
            <span className={`status-indicator ${card.status}`}></span>
          </div>
          <div className="status-info">
            <h3>{card.name}</h3>
            <p className="status-date">{card.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
