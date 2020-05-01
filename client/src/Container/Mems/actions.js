const actions = {
  showCardDetails: (setState, prevState, cardId) => {
    const { memories } = prevState;
    const prevCard = memories.slice(cardId, cardId + 1)[0];
    prevCard.showDetails = !prevCard.showDetails;
    memories.splice(cardId, prevCard);
    setState({
      memories,
      // memories[cardId].showCardDetails: ![memories[cardId]].showCardDetails,
    });
  },
};

export default actions;
