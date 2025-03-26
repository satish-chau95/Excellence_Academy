import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
} from '../../styles/EventCalendarStyles';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [error, setError] = useState(null);

  // Fetch events from backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Error fetching events');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Add new event
  const addEvent = async (e) => {
    e.preventDefault();
    if (!newEvent.trim()) {
      setError('Event cannot be empty!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/v1/events/create', {
        event: newEvent, // Ensure correct key
      });

      setEvents([response.data.event, ...events]); // Add new event at top
      setNewEvent('');
      setError(null);
    } catch (error) {
      console.error('Error adding event:', error);
      setError(error.response?.data?.error || 'Error adding event');
    }
  };

  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <h1>Events & Calendar</h1>
        <div>Current Time: {new Date().toLocaleString()}</div>

        <CalendarContainer>
          Calendar {/* Replace with a real calendar component */}
        </CalendarContainer>

        <AddEventForm onSubmit={addEvent}>
          <h2>Add New Event</h2>
          <EventInput
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter Event"
          />
          <AddEventButton type="submit">Add Event</AddEventButton>
        </AddEventForm>

        {error && <ErrorText>{error}</ErrorText>}

        <Events>
          <h2>Events</h2>
          {events.length > 0 ? (
            events.map((eventObj, index) => (
              <Event key={index}>{eventObj.event}</Event>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalendar;
