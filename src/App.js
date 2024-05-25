import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const hostBackend = process.env.REACT_APP_BACKEND  
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    console.log(process.env)
    fetch(`${hostBackend}/alumnos`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setItems(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table align="center">
        <caption>
        Tecylab - Curso AWS
        </caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
          </tr>
        </thead>
        <tbody>
         
          { items.map((item) => {
            return <>
            <tr>
            <th scope="row">{item.id}</th>
            <td>{item.nombre}</td>
            <td>{item.apellidos}</td>
            </tr>
            </>
          })}
          
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colspan="2">Total</th>
            <td>2</td>
          </tr>
        </tfoot>
      </table>
      </header>
    </div>
  );
}

export default App;
