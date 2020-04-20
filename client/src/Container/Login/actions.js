const actions = {
  onChange: (setState, name, value) => {
    console.log({ name, value });
    setState({
      [name]: value,
    });
  },
};

export default actions;
