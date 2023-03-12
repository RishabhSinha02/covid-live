import React, {useEffect, useState} from 'react'

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async ()=>{
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json();
            setData(actualData.statewise[0]);
            console.log(actualData.statewise[0]);

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
      getCovidData();
    }, []);
    
    return (
        <>
            {/* <div></div> */}
            <div>Total Recovered: {data.deltarecovered}</div>
            <div>Total Confirmed: {data.deltaconfirmed}</div>
            <div>Total Deaths: {data.deltadeaths}</div>
            <div>Total Actives: {data.active}</div>
            <div>Last Update: {data.lastupdatedtime}</div>
        </>
    )
}

export default Covid