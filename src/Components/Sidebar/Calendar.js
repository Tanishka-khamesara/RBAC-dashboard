import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { UserContext } from '../Context/Context';
import { useContext } from 'react';

import './Calendar.css'; // Import your CSS file

function Calendar() {
    const Ctx = useContext(UserContext);
    const useCtx = Ctx.colors;
    const [currentEvents, setCurrentEvents] = useState([]);

    console.log(currentEvents); // Log currentEvents here

    const handleDateClicked = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'?`)) {
            selected.event.remove();
        }
    };

    const formatDateCustom = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="calendar-container">
            <header className="calendar-header">CALENDAR</header>
            <p className="calendar-text">Full Calendar Interactive Page</p>
            <div className="calendar-flex">
                {/* Calendar sidebar */}
                <div className="sidebar">
                    <ul className="events-list">
                        {currentEvents && currentEvents.map((event) => (
                            <li key={event.id} className="event-item" style={{backgroundColor:useCtx.forboxBlue}}>
                                <div className="event-title">{event.title}</div>
                                <div className="event-date">{formatDateCustom(event.start)}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CALENDAR */}
                <div className="calendar">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClicked}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "12315",
                                title: "All-day event",
                                date: "2022-09-14",
                            },
                            {
                                id: "5123",
                                title: "Timed event",
                                date: "2022-09-28",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Calendar;
