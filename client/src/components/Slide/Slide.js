import React from "react";
import { Spring } from "react-spring/renderprops";
import styled from "@emotion/styled";
import { withGesture } from "react-with-gesture";

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const offsetCardClick = (i) => {
    console.log(i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring to={styles[index]} config={animationConfig}>
      {(style) => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 10),
          }}
        >
          <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
            {content}
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

const styles = {
  0: {
    transform: "translateX(0%) translateY(-41.7%) scale(0.8)",
    top: "22%",
    opacity: 0,
  },
  1: {
    transform: "translateX(0%) translateY(-80%) scale(0.85)",
    top: "42%",
    opacity: 0.85,
  },
  2: {
    transform: "translateX(0%) translateY(-70%) scale(0.9)",
    top: "44%",
    opacity: 0.9,
  },
  3: {
    transform: "translateX(0%) translateY(-60%) scale(0.95)",
    top: "47%",
    opacity: 0.95,
  },
  4: {
    transform: "translateX(0%) translateY(-50%) scale(1)",
    top: "50%",
    opacity: 1,
  },
  5: {
    transform: "translateX(0%) translateY(-40%) scale(0.95)",
    top: "51%",
    opacity: 0.95,
  },
  6: {
    transform: "translateX(0%) translateY(-30%) scale(0.9)",
    top: "52%",
    opacity: 0.9,
  },
  7: {
    transform: "translateX(0%) translateY(-20%) scale(0.85)",
    top: "52.5%",
    opacity: 0.85,
  },
  8: {
    transform: "translateX(0%) translateY(-60%) scale(0.8)",
    top: "74%",
    opacity: 0,
  },
};
export default withGesture()(Slide);
