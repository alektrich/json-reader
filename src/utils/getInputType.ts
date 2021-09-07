const getInputType = (value: string|number): string => {
  switch (typeof value) {
  case 'number':
    return 'number';
  case 'string':
    return 'text';
  default:
    return 'text';
  }
};

export default getInputType;
