import { Container } from "@mui/system";
import React from "react";
import Chart from "./Chart";
import DataTable from "./DataTable";
import SearchBar from "./SearchBar";

interface Props {
    data: any
    onSubmission(data: any): void;
}

function Homepage({data, onSubmission}: Props) {
  return (
    <Container maxWidth="xl" sx={{backgroundColor: '#fff'}}>
      <Chart />
      <SearchBar onSubmission={onSubmission}/>
      <DataTable data={data}/>
    </Container>
  );
}

export default Homepage;
