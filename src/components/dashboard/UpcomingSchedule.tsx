import { CalendarClock } from 'lucide-react';
import { upcomingAppointments } from '../../data/appointmentsData';
import AppointmentCard from './AppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  // Group appointments by day
  const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {} as Record<string, typeof upcomingAppointments>);
  
  return (
    <div className="upcoming-schedule card">
      <div className="schedule-header">
        <div className="schedule-icon">
          <CalendarClock size={20} />
        </div>
        <h2>The Upcoming Schedule</h2>
      </div>
      
      <div className="schedule-content">
        {Object.entries(appointmentsByDay).map(([day, appointments]) => (
          <div key={day} className="schedule-day">
            <h3 className="day-heading">On {day}</h3>
            <div className="day-appointments">
              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  title={appointment.title}
                  doctor={appointment.doctor}
                  time={appointment.time}
                  icon={appointment.icon}
                  isCompleted={appointment.isCompleted}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;