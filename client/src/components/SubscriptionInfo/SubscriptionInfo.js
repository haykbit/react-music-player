import React from "react";
import "./style/subscriptioninfo.scss";
import Button from "../Buttons/index";
import { BiEdit } from "react-icons/bi";

function SubscriptionInfo() {
  return (
    <div className="subscription-info">
      <div className="text-row">
        <h2>Subscription Information</h2>
      </div>
      <div className="content">
        <div className="top-row">
          <div className="sub-info">
            <div>
              <h3>Period</h3>
              <p>Monthly</p>
            </div>
            <div className="subscription-label">
              <h3>Started</h3>
              <p>24/04/2020</p>
            </div>
          </div>
        </div>
        <div className="bottom-row">
          <Button className="edit-btn" label="Edit" children="Edit">
            <BiEdit className="button-icon" />
            Cancel subscription
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionInfo;
