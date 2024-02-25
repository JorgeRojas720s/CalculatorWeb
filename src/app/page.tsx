'use client';
import React from 'react';
import Buttons from './components/Buttons';
import "./style.css"

export default function Home() {

  const buttonsCalculator = ["1","2","3","4","5","6","7","8","9","0","+","-","x","/","="];

  function clickButton(value: string) {
    console.log("clickeadoooooo  ", value);
  }

  function fillButtons(buttonsCalculator: string[]): JSX.Element[] {
    return buttonsCalculator.map((button) => (
      <Buttons number={button} onClick={() => clickButton(button)}/>
    ));
  }


  return (
    <main>
      <div className="title">
        <h1>Calculator</h1>
      </div>
      <div className="buttons-container">
        <div className="total-container">
          <h2>Total</h2>
        </div>
        {fillButtons(buttonsCalculator)}
      </div>
    </main>
  );
}
