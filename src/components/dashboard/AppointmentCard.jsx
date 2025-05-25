import { Bluetooth as Tooth, Stethoscope, Heart, Activity } from 'lucide-react';
import './AppointmentCard.css';

function getAppointmentIcon(iconName) {
  const iconProps = { size: 20 };

  switch (iconName) {
    case 'tooth':
      return <Tooth {...iconProps} />;
    case 'stethoscope':
      return <Stethoscope {...iconProps} />;
    case 'heart':
      return <Heart {...iconProps} />;
    case 'activity':
      return <Activity {...iconProps} />;
    default:
      return <Activity {...iconProps} />;
  }
}

function AppointmentCard({ title, doctor, time, icon, day, isCompleted }) {
  return (
    <div className={`appointment-card ${isCompleted ? 'completed' : ''}`}>
      <div className="appointment-icon">
        {getAppointmentIcon(icon)}
      </div>
      <div className="appointment-details">
        <div className="appointment-info">
          <h3 className="appointment-title">{title}</h3>
          {doctor && <p className="appointment-doctor">{doctor}</p>}
        </div>
        <div className="appointment-time">
          {day && <span className="appointment-day">{day}</span>}
          <span className="time">{time}</span>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;
