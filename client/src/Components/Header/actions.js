const actions = {
  handleToggle: (setState, prevState) => {
    setState({ isOpen: !prevState.isOpen });
  },
};

export default actions;
