import {usePrayer} from '../context/PrayerContext.jsx';

const PrayerTimesCard = () => {
    const {todaysPrayers} = usePrayer();
    return (
        <div id="prayers-card">
            {Object.keys(todaysPrayers).map( key =>
                <div key={key}><span>{key}</span>:{Array.isArray(todaysPrayers[key]) ? <span>{todaysPrayers[key][0]}-{todaysPrayers[key][1]}</span> : <span>{todaysPrayers[key]}</span>}</div>
            )}
        </div>
    );
};

export default PrayerTimesCard;