import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

import Assignment1 from './assignments/Day1_ReactComponents/Assignment1';
import Assignment2 from './assignments/Day1_ReactComponents/Assignment2';
import Assignment3 from './assignments/Day1_ReactComponents/Assignment3';
import Assignment4, { RDSummary, InvestmentHistory } from './assignments/Day3_React Routing/Assignment4';
import Assignment5, { CreateFD, CreateRD, Overview, Support } from './assignments/Day3_React Routing/Assignment5';
import Assignment6 from './assignments/Day3_React Routing/Assignment6';
import Assignment7 from './assignments/Day2_ Forms _UI/Assignment7';
import Assignment8 from './assignments/Day2_ Forms _UI/Assignment8';
import Assignment9 from './assignments/Day2_ Forms _UI/Assignment9';
import Assignment10 from './assignments/Day4_ Event_Handling_Styling/Assignment10';
import Assignment11 from './assignments/Day4_ Event_Handling_Styling/Assignment11';
import Assignment12 from './assignments/Day4_ Event_Handling_Styling/Assignment12';
import Assignment13 from './assignments/Day_5_React_redux/Assignment13';
import Assignment14 from './assignments/Day_5_React_redux/Assignment14';
import Assignment15 from './assignments/Day_5_React_redux/Assignment15';
import InvestmentDetail from './assignments/Day3_React Routing/InvestmentDetail';

const App = () => {
 
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, paddingLeft: '100px', paddingTop:"30px" }}>
        <Routes>
        <Route path="/" element={<Assignment1 />} />
          <Route path="/assignment1" element={<Assignment1 />} />
          <Route path="/assignment2" element={<Assignment2 />} />
          <Route path="/assignment3" element={<Assignment3 />} />
          <Route path="/assignment4" element={<Assignment4 />}>
            <Route index element={<p>Welcome to the FD & RD Management Portal.</p>} />
            <Route path="fixed-deposit" element={<Assignment7 />} />
            <Route path="recurring-deposit" element={<RDSummary />} />
            <Route path="investment-history" element={<InvestmentHistory />} />
          </Route>
          <Route path="/assignment5" element={<Assignment5 />}>
            <Route index element={<Overview />} />
            <Route path="create-fd" element={<CreateFD />} />
            <Route path="create-rd" element={<CreateRD />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="/assignment6" element={<Assignment6 />} />
          <Route path="/assignment6/investment/:id" element={<InvestmentDetail/>} />
          <Route path="/assignment7" element={<Assignment7 />} />
          <Route path="/assignment8" element={<Assignment8 />} />
          <Route path="/assignment9" element={<Assignment9 />} />
          <Route path="/assignment10" element={<Assignment10 />} />
          <Route path="/assignment11" element={<Assignment11 />} />
          <Route path="/assignment12" element={<Assignment12 />} />
          <Route path="/assignment13" element={<Assignment13 />} />
          <Route path="/assignment14" element={<Assignment14 />} />
          <Route path="/assignment15" element={<Assignment15 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
