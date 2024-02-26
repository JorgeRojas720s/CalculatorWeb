'use client';
import React from "react";

type ButtonParams = {
  number: string;
  key: number
  onClick: (params: any) => void;
}

const Buttons = (args: ButtonParams) => {
  return (
    <div>
      <button className="button" onClick={args.onClick}>
        {args.number}
      </button>
    </div>
  );
};

export default Buttons;
