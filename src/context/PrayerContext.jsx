import {useState, useContext, createContext} from 'react';


const PrayerContext = createContext();

export const PrayerProvider = ({ children }) => {
    const [todaysPrayers, setTodaysPrayers] = useState(null);
    const [today, setToday] = useState(null);
    const [fullData, setFullData] = useState(null);

    return (
        <PrayerContext.Provider value={{todaysPrayers, setTodaysPrayers, today, setToday, fullData, setFullData}}>
            {children}
        </PrayerContext.Provider>
    );
};

export const usePrayer = () => useContext( PrayerContext );