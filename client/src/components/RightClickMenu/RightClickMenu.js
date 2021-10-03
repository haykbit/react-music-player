import React from "react";

function RightClickMenu({ x, y, showMenu }) {
  const style = () => {
    return {
      height: 200,
      width: 150,
      borderRadius: 10,
      backgroundColor: "#FF5C58",
      color: "#FCD2D1",
      display: "flex",
      flexDirecction: "column",
      padding: 10,
      top: y,
      left: x,
      position: "absolute",
      zIndez: 999,
      display: showMenu ? "flex" : "none",
    };
  };
  return (
    <div style={style()}>
      <div className={styles.div}>Button 1</div>
      <div className={{ ...styles.div, ...styles.margin }}>Button 2</div>
      <div className={styles.div}>Button 3</div>
    </div>
  );
}

const styles = {
  div: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FE8F8F",
    color: "#FFEDD3",
    fontWeight: "bold",
    cursor: "pointer",
  },
  margin: {
    margin: "10px 0",
  },
};

export default RightClickMenu;
