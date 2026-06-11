import { useState, useEffect } from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import allData from './assets/prayerTimes.json';
import { usePrayer } from './context/PrayerContext.jsx';
import PrayerTimesCard from './components/PrayerTimesCard.jsx';
import PrayerTimesMonth from './components/PrayerTimesMonth.jsx';
import './App.css';

const App = () => {
  const { todaysPrayers, setTodaysPrayers, today, setToday, setFullData } = usePrayer();

  useEffect(() => {
    const todaysDate = new Date().toLocaleDateString('en-GB').replaceAll('/', '.');
    const y = allData.filter(data => data.gregDate === todaysDate)[0];

    setTodaysPrayers(y);
    setToday(todaysDate);
    setFullData(allData);
  }, []);

  if (!todaysPrayers)
    return <div>Loading...</div>;
  return (
    <>
      <Routes>
        <Route path="/" element={<PrayerTimesCard />}/>
        <Route path="/month" element={<PrayerTimesMonth />} />
      </Routes>
      <nav>
        <NavLink to='/'>Today</NavLink>
        <NavLink to='/month'>Full Month</NavLink>
      </nav>
    </>
  );
};

export default App;