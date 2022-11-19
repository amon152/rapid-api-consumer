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
  const cases = chartData?.map((data: any) => (
    { 'new cases': data.cases.new, deaths: data.deaths.new, 
      time: (() => new Date(data.time).toLocaleTimeString('en-GB', { hour: '2-digit' }))() })).sort((a: any, b: any)=> {
        return a.time - b.time;
    })
  console.log(cases)

  return (
    <Container maxWidth='xl'>
      {chartData ? (
        <LineChart
          width={1440}
          height={500}
          data={cases}
          margin={{ top: 50, right: 20, left: 20, bottom: 5 }}
        >
          <XAxis dataKey='time' scale={cases.time} />
          <YAxis type="number" domain={[0, 120000]} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" stroke="#0004" />
          <Line type="monotone" dataKey='new cases' stroke="#ffa000" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="deaths" stroke="#38ff08" />
        </LineChart>
      ) : (
        <div> hey</div>
      )}

    </Container>
  );
}

export default Chart;
