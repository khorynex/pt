import {usePrayer} from '../context/PrayerContext.jsx';

const PrayerTimesMonth = () => {
    const {fullData} = usePrayer();

    if( !fullData )
        return <div>Loading...</div>;
    return (
        <>
        <div className="headItem">
            <span>Weekday</span>
            <span>Gregorian Date</span>
            <span>Hijri Date</span>
            <span className="twoBlocks">Fajr</span>
            <span className="twoBlocks">Dhuhr</span>
            <span className="twoBlocks">Asr</span>
            <span className="twoBlocks">Maghrib</span>
            <span className="twoBlocks">Isha</span>
        </div>
        { fullData.map( (data, ind) => {
            return (
            <div className="bodyItem" key={ind}>
                <span>{data.weekday}</span>
                <span>{data.gregDate}</span>
                <span>{data.hijriDate}</span>
                <span className="start">{data.fajr[0]}</span>
                <span>{data.fajr[1]}</span>
                <span className="start">{data.dhuhr[0]}</span>
                <span>{data.dhuhr[1]}</span>
                <span className="start">{data.asr[0]}</span>
                <span>{data.asr[1]}</span>
                <span className="start">{data.maghrib[0]}</span>
                <span>{data.maghrib[1]}</span>
                <span className="start">{data.isha[0]}</span>
                <span>{data.isha[1]}</span>
            </div>
            );
        })}
        </>
    );
};

export default PrayerTimesMonth;