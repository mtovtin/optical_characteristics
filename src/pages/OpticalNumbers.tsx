import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const OpticalNumbers = () => (

<div style={{margin:'40px'}}>


   <h1>ПОКАЗНИКИ ЗАЛОМЛЕННЯ</h1>

  
  <table className="table table-striped" >
    <thead className="thead-dark">
    <tr>
      <th >Речовина</th>
      <th >Показник заломлення
    </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
         Вакуум</td>
      <td>1 (точне значення)</td>
    </tr>
    <tr>
      <td>Гелій</td>
      <td>
        1.000036
      </td>
    </tr>
    <tr>
      <td>Повітря</td>
      <td>1.0002926
     </td>
    </tr>
    <tr>
      <td>Вуглекислий газ</td>
      <td>1.00045</td>
    </tr>
    <tr>
      <td>Лід</td>
      <td>1.31
     </td>
    </tr>
    <tr>
      <td>Вода(20 °C)
    </td>
      <td>1.332986</td>
    </tr>
    <tr>
      <td>Ацетон</td>
      <td>1.36</td>
    </tr>
    <tr>
      <td>MgF2
</td>
      <td>1.35-1.40</td>
    </tr>
    <tr>
      <td>CaF2</td>
      <td>1.21-1.43</td>
    </tr>
    <tr>
      <td>L1F</td>
      <td>1.29-1.35</td>
    </tr>
    <tr>
      <td>SiO</td>
      <td>1.5-1.6</td>
    </tr>
    <tr>
      <td>Тефлон</td>
      <td>1.35 - 1.38</td>
    </tr>
    <tr>
      <td>Гліцерин</td>
      <td>1,4729</td>
    </tr>
    <tr>
      <td>Бензол</td>
      <td>1,500</td>
    </tr>
    <tr>
      <td>Кам'яна сіль</td>
      <td>1.516</td>
    </tr>
    <tr>
      <td>Кварц</td>
      <td>1,544</td>
    </tr>
    <tr>
      <td>Слюда</td>
      <td>1,56-1,60</td>
    </tr>
    <tr>
      <td>Поліетилен</td>
      <td>1.5750</td>
    </tr>
    <tr>
      <td>Скло</td>
      <td>1.485 - 1.925</td>
    </tr>
    <tr>
      <td>Діамант</td>
      <td>2.419</td>
    </tr>
    <tr>
      <td>Арсенід галію</td>
      <td>3.927</td>
    </tr>
    <tr>
      <td>Кремній</td>
      <td>4.01</td>
    </tr>
  </tbody>
</table>

</div>

);

export default OpticalNumbers;