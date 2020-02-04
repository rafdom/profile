export const fadeUp = {
  initial: { translateY: 400, opacity: 0 },
  animate: {
    translateY: 0,
    opacity: 1
  },
  transition: {
    ease: "easeOut",
    delay: 1,
    type: "spring"
  }
};

export const fadeDown = {
  initial: false,
  animate: {
    translateY: 400,
    opacity: 0
  },
  transition: {
    ease: "easeOut",
    type: "spring"
  }
};

export const slideLeft = {
  initial: { translateX: 300, opacity: 0 },
  animate: {
    translateX: 0,
    opacity: 1
  },
  transition: {
    delay: 1.7,
    type: "spring"
    // damping: 7
  }
};

export const slideRight = {
  initial: false,
  animate: {
    translateX: -300,
    opacity: 0
  },
  transition: {
    // type: "spring"
  }
};

export const colorChange = {
  animate: {
    color: "#2c2e3a",
    fontWeight: 700
  },
  transition: {
    duration: 0.1,
    delay: 2.75,
    ease: "easeOut"
  }
};

export const revertColor = {
  animate: {
    color: "#fff"
  }
};
