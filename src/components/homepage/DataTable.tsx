import { Container, Paper, Typography } from "@mui/material";
import React from "react";

interface StatisticCard {
  continent: string,
  country: string,
  population: number,
  cases: {
    new: string,
    active: number,
    critical: number,
    recovered: number,
    total: number,
  },
  deaths: {
    new: string,
    totals: number, 
  },
  tests : {
    "1M_pop": string,
    total: number,
},
day: string, 
time : string
}

const styles = {
  
}

function DataTable({ data }: any) {
  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "#fff", p: 2, borderRadius: "2rem" }}
    >
      <Paper sx={{ display: "flex", elevation: 2 }}>
        <Typography sx={{ color: "#00f", px: 1, width: '25%', py: 2, fontWeight:800 }}>Country</Typography> 
        <Typography sx={{width: '25%', py: 2, fontWeight:800}}>Total Cases</Typography>
        <Typography sx={{width: '25%', py: 2, fontWeight:800}}>Population</Typography>
        <Typography sx={{width: '25%', py: 2, fontWeight:800}}>New cases</Typography>
      </Paper>
      {data?.map((statistic: StatisticCard) => (
        <>
          <TableItem key={statistic.country} {...statistic} />

        </>
      ))}
    </Container>
  );
}

function TableItem({ population, country, cases }: StatisticCard) {
  return (
    <Paper sx={{ m: 0.5, display: "flex" }}>
      <Typography sx={{ color: "#00f", py: 1, pl: 2, width: '25%' }}>{country}</Typography>{" "}
      <Typography sx={{pl: 2, width: '25%'}}>{cases.total}</Typography>
      <Typography sx={{ width: '25%'}}>{population}</Typography>
      <Typography sx={{ width: '25%'}}>{cases.new}</Typography> 
    </Paper>
  );
}

export default DataTable;

/*
{
    "continent": "Asia",
    "country": "Malaysia",
    "population": 33181072,
    "cases": {
        "new": "+3457",
        "active": 27877,
        "critical": 89,
        "recovered": 4895719,
        "1M_pop": "149488",
        "total": 4960179
    },
    "deaths": {
        "new": "+9",
        "1M_pop": "1103",
        "total": 36583
    },
    "tests": {
        "1M_pop": "1989377",
        "total": 66009647
    },
    "day": "2022-11-18",
    "time": "2022-11-18T05:45:06+00:00"
}
*/
