"use client";
import * as React from "react";
import Buttons from "./components/Buttons";
import "./style.css";

export default function Home() {
  const buttonsCalculator = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "x",
    "/",
    "=",
  ];

  const [total, setTotal] = React.useState<string>("");

  function clickButton(value: string) {
    let result;
    let secondNumber = "";
    let operator;
    let firstNumbeer = "";

    console.log("clickeadoooooo  ", value);
    setTotal(total + value);

    total.split("+");

  }

  function fillButtons(buttonsCalculator: string[]): JSX.Element[] {
    return buttonsCalculator.map((button, key) => (
      <Buttons number={button} key={key} onClick={() => clickButton(button)} />
    ));
  }

  return (
    <main>
      <section>
        <div className="title">
          <h1>Calculator</h1>
        </div>
      </section>
      <section>
        <div className="buttons-container">
          <div className="total-container">
            <h2>Total</h2>
            <div className="screen">{total}</div>
          </div>
          {fillButtons(buttonsCalculator)}
        </div>
      </section>
    </main>
  );
}
