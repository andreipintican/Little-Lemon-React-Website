import { useState } from 'react';
import './BookingForm.styles.css';
import { submitAPI } from '../../utils/temp';
import { useNavigate } from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';
import home from '../../assets/booking/home.svg';

const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const { times } = availableTimes;
  const [bookings, setBookings] = useState({
    date: '',
    time: '17:00',
    guests: '',
    occasion: 'Birthday',
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (bookings.date && bookings.time && bookings.guests) {
      submitAPI(bookings);
      navigate('/confirmed', { state: { bookings } });
      setBookings({
        date: '',
        time: '17:00',
        guests: '',
        occasion: 'Birthday',
      });
    } else {
      console.error('ERROR: All fields are required.');
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setBookings({ ...bookings, [name]: value });
  };

  return (
    <section name="reservations" className="booking-form">
      <LinkR to="/">
        <img src={home} alt="home" className="booking-home" />
      </LinkR>
      <div className="bookings-container">
        <h2 className="booking-header">Little Lemon</h2>
        <h2 className="booking-subheader">Cluj-Napoca</h2>
        <h1 className="booking-title">Find a Table for any occasion</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Date:</label>
          <input
            type="date"
            name="date"
            id="res-date"
            value={bookings.date}
            onChange={e => {
              setBookings({ ...bookings, date: e.target.value });
              dispatch({ type: 'UPDATE_TIMES', date: new Date(e.target.value) });
            }}
            required
          />
          <label htmlFor="res-time">Time:</label>
          <select
            id="res-time"
            name="time"
            value={bookings.time}
            onChange={handleChange}
            required
          >
            {times.map(time => (
              <option key={time}>{time}</option>
            ))}
          </select>
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            placeholder="1-20"
            min="1"
            max="20"
            id="guests"
            name="guests"
            value={bookings.guests}
            onChange={handleChange}
            required
          />
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={bookings.occasion}
            onChange={handleChange}
            required
          >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
            <option>Wedding</option>
          </select>
          <button type="submit" className="booking-button">
            Make Your Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
