const onChange = (setState, e) => {
  e.prevenDefault();
  const { value, name } = e.target;
  setState({
    [name]: value,
  });
};

export default onChange;
