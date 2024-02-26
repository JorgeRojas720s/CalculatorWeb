'use client';
import React from 'react';
import Buttons from './components/Buttons';
import "./style.css"

export default function Home() {

  const buttonsCalculator = ["1","2","3","4","5","6","7","8","9","0","+","-","x","/","="];

  let array;
  let [Operator, setOperator] = React.useState("");

  let [total,setTotal] = React.useState("");

  let aux;

  function add(array: any){

    if(Operator === "+"){
      aux = parseInt(array[0]) + parseInt(array[1]);
      setTotal(aux.toString());
    }
  }

  function subtract(array: any){

    if(Operator === "-"){
      aux = parseInt(array[0]) - parseInt(array[1]);
      setTotal(aux.toString());
    }
  }

  function multiply(array: any){

    if(Operator === "x"){
      aux = parseInt(array[0]) * parseInt(array[1]);
      setTotal(aux.toString());
    }
  }

  function split(array: any){

    if(Operator === "/"){
      aux = parseInt(array[0]) / parseInt(array[1]);
      setTotal(aux.toString());
    }
  }

function clickButton(value: string) {
    console.log("clickeadoooooo  ", value);
    setTotal(total + value);

    if(value === "+" || value === "-" || value === "x" || 
    value === "/"){
      setOperator(value);
    }

    if(value === "="){
      array = total.split(Operator);
      add(array);
      subtract(array);
      multiply(array);
      split(array);
    }
    total += value;
  }

  function fillButtons(buttonsCalculator: string[]): JSX.Element[] {
    return buttonsCalculator.map((button, key) => (
      <Buttons number={button} key={key} onClick={() => clickButton(button)}/>
    ));
  }


  return (
    <main>
      <div className="title">
        <h1><br></br>Calculator</h1>
      </div>
      <div className="buttons-container">
        <div className="total-container">
          <h2>Total</h2>
          <div>{total}</div>
        </div>
        {fillButtons(buttonsCalculator)}
      </div>
    </main>
  );
}
