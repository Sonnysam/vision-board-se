import React, { useState } from "react";
import "./mortgage.scss";
import image from "./build.jpg";
import CallToAction from "../callToActionBtn/callToAction";
import AnimatedNumbers from "react-animated-numbers";

import Input from "./input/input";
function MortgageCalc() {
  const [num, setNum] = useState(1234.889);
  return (
    <div className="mortgage">
      <span className="calc">
        <div className="left">
          <div className="image">
            <img src={image} alt="showcase" />
          </div>
          <div className="number">
            <span>Amount $</span>{" "}
            <AnimatedNumbers
              includeComma
              animateToNumber={num}
              fontStyle={{ fontSize: 50 }}
              configs={[
                { mass: 1, tension: 130, friction: 40 },
                { mass: 2, tension: 140, friction: 40 },
                { mass: 3, tension: 130, friction: 40 },
              ]}
            />
          </div>
        </div>
        <div className="calculate">
          <h1>Mortgage Calculator</h1>
          <div className="lineup-calc">
            <Input label="Currency" />
            <Input label="Age" />
            <Input label="Net income" />
            <Input label="Price" />
            <Input label="Deposit" />
          </div>
          <div className="percentages">
            <span>
              <div className="label-cal">Annual Interest Rate</div> 20%
            </span>
            <span>
              <div className="label-cal">Term of Loan(Years)</div> 20%
            </span>
          </div>
        </div>
      </span>
      <CallToAction
        fontSize="1.5rem"
        width="90%"
        padding="1em"
        borderRadius="2px"
        text="Calculate Mortgage"
      />
    </div>
  );
}
export default MortgageCalc;
