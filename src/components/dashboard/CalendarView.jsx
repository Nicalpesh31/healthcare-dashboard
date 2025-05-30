import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarData, calendarAppointments } from '../../data/calendarData';
import AppointmentCard from './AppointmentCard';
import './CalendarView.css';

function CalendarView() {
  const [currentMonth] = useState('October');
  const [currentYear] = useState(2021);

  return (
    <div className="calendar-card card">
      <div className="calendar-header">
        <div className="calendar-title">
          <h2>{currentMonth} {currentYear}</h2>
        </div>
        <div className="calendar-nav">
          <button className="icon-button" onClick={() => {}}>
            <ChevronLeft size={18} />
          </button>
          <button className="icon-button" onClick={() => {}}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-days">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="calendar-day-header">{day}</div>
          ))}
        </div>

        <div className="calendar-dates">
          {calendarData.map((date, index) => (
            <div
              key={`${date.day}-${index}`} // unique key combining day and index
              className={`calendar-date ${date.isCurrentMonth ? '' : 'other-month'} ${date.isToday ? 'today' : ''} ${date.hasAppointment ? 'has-appointment' : ''}`}
            >
              <span className="date-number">{date.day}</span>
              {date.appointments.map((appointment, idx) => (
                <div
                  key={appointment.id ?? idx} // use appointment.id if available otherwise fallback to index
                  className="date-appointment"
                >
                  {appointment.title ?? appointment}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="upcoming-appointments">
        {calendarAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            title={appointment.title}
            doctor={appointment.doctor}
            time={appointment.time}
            icon={appointment.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
