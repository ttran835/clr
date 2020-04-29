const actions = {
  showCardDetails: (setState, prevState, cardId) => {
    const { places } = prevState;
    const prevCard = places.slice(cardId, cardId + 1)[0];
    prevCard.showDetails = !prevCard.showDetails;
    places.splice(cardId, prevCard);
    setState({
      places,
    });
  },
};

export default actions;
