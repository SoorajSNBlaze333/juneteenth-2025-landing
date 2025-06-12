export const quotesContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const quotesItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};
