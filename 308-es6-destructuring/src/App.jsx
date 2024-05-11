import React from "react";
import cars from "./practice.js"

const [honda, tesla] = cars;

const {speedStats : {topSpeed: teslaTopSpeed}} = tesla;
const {speedStats : {topSpeed: hondaTopSpeed}} = honda;
const {coloursByPopularity : [teslaTopColour]} = tesla;
const {coloursByPopularity : [hondaTopColour]} = honda;






function App() {
  return (
    <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
  );
}

export default App;

