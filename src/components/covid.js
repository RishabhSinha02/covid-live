import React, { useEffect, useState } from 'react'
const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
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

    const stats = [
        { id: 1, name: 'Our Country', value: 'India' },
        { id: 2, name: 'Total Recovered', value: data.deltarecovered },
        { id: 3, name: 'Total Confirmed', value: data.deltaconfirmed },
        { id: 4, name: 'Total Deaths', value: data.deltadeaths },
        { id: 5, name: 'Total Actives', value: data.active },
        { id: 6, name: 'Last Update', value: '12/11/2022'},
        // { id: 6, name: 'Last Update', value: data.lastupdatedtime.split(" ")[0]},
      ]

    return (
        <>
        <div className="bg-white py-24 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-25">

    </div>
        </>
    )
}

export default Covid