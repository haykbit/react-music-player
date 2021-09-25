import React from "react";
import "./style/paymentInfo.scss";
import Button from "../Buttons/index";
import Input from "../Buttons/index";

function PaymentInfo() {
  return (
    <div className="payment-info">
      <div className="text-row">Payment Information</div>
      <div className="top-row">
        <Input className="payment-input" />
        <Input className="payment-input" />
        <Input className="payment-input" />
      </div>
      <div className="bottom-row">
        <Button children="Button" />
        <Button children="Button" />
      </div>
    </div>
  );
}

export default PaymentInfo;
