const addClass = (id: number): string => {
  switch (id) {
    case 2:
      return 'skill-card--mix'
    case 3:
      return 'skill-card--reverse'
  }
};

export default addClass;