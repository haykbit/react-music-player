import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./style/spinner.scss";
function Spinner({ color, loading }) {
  return (
    <div className="loader-container">
      <ScaleLoader height={35} color={color} loading={loading} />
    </div>
  );
}

export default Spinner;
