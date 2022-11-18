import React from "react";
import { Container } from '@mui/material'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend, ResponsiveContainer } from "recharts";



function Chart() {
  const [chartData, setChartData] = React.useState<any>()

  React.useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a089872b64mshcff3f2d99c49448p142e93jsn98719ce23edc',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };

    fetch('https://covid-193.p.rapidapi.com/history?country=all&day=2020-06-02', options)
      .then(response => response.json())
      .then(response => setChartData(response.response))
      .catch(err => console.error(err));
  }, [setChartData])

  console.log(chartData)
  const cases = chartData?.map((data: any) => ({ new: data.cases.new, deaths: data.deaths.new, time: (() => new Date(data.time).getUTCHours())() }))
  console.log(cases)

  return (
    <Container maxWidth='lg'>
      {chartData ? (
          <LineChart
            width={1200}
            height={700}
            data={cases}
            margin={{ top: 25, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey='time' />
            <YAxis type="number" domain={[0, 120000]}/>
            {/* <Tooltip /> */}
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey='new' stroke="#ffa000" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="deaths" stroke="#38ff08" />
            <Line type="monotone" dataKey="lives" stroke="#38ff08" />
          </LineChart>
      ) : (
        <div> hey</div>
      )}

    </Container>
  );
}

export default Chart;
