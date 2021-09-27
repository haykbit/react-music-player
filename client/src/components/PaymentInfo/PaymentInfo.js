import React from "react";
import "./style/paymentInfo.scss";
import Button from "../Buttons/index";
import { BiEdit } from "react-icons/bi";

function PaymentInfo() {
  return (
    <div className="payment-info">
      <div className="text-row">
        <h2>Payment Information</h2>
      </div>
      <div className="content">
        <div className="top-row">
          <div className="card-info">
            <label>
              <p>Card Number</p>
              <input
                className="payment-input"
                disabled="disabled"
                value="5454 5454 5454 5454"
              />
            </label>
            <label className="payment-label">
              <p>Expire date</p>
              <input
                className="payment-input"
                disabled="disabled"
                value="09/25"
              />
            </label>
          </div>
          <div className="ccv-input">
            <label className="ccv-label">
              <p>CCV</p>
              <input
                type="password"
                className="payment-input"
                disabled="disabled"
                value="333"
              />
            </label>
          </div>
        </div>
        <div className="bottom-row">
          <Button className="edit-btn" label="Edit" children="Edit">
            <BiEdit className="button-icon" />
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
