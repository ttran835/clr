import halloween from 'Imgs/halloween-house.jpg';
import pumkin from 'Imgs/pumkin.jpg';
import dLand from 'Imgs/d-land-heart.jpg';
import gumwall from 'Imgs/seattle-gum-wall.jpg';
import seattleAqa from 'Imgs/seattle.jpg';
import cielo from 'Imgs/cielo.jpg';

const initialState = {
  memories: [
    {
      locationName: 'Halloween House!',
      city: 'Los Angeles',
      description:
        'Loool, you were basically begging to go to this place since you love taking pictures so much. I had to agree and go with you. I hope you had fun! This year though, we gonna do Universal Studios!! Assuming everything opens up soon.',
      img: halloween,
      alt: '',
      showDetails: false,
    },
    {
      locationName: 'Pumpkin Patch',
      city: 'Somewhere where rich people are.',
      description:
        'Our first pumpkin patch! It was alright. Maybe we should go next year. It was just hot and there were way too many people.',
      img: pumkin,
      alt: '',
      showDetails: false,
    },
    {
      locationName: 'THE BIG D!',
      city: 'Anaheim',
      description:
        'Wow, what a fun experience am I right? We spent less than I thought we would have at a place like the Big D! I hope they open back up in 2021 so we can do your dapper stuff.',
      img: dLand,
      alt: '',
      showDetails: false,
    },
    {
      locationName: 'Gumwall!',
      city: 'Seattle',
      description: 'Ugh, it made me almost throw up. Such disgusting place!!!',
      img: gumwall,
      alt: '',
      showDetails: false,
    },
    {
      locationName: 'Seattle Aquarium',
      city: 'City we went to',
      description:
        'This is where you talked me into buying my nephew that seal. It was such a cute seal. I hope he remembers. If he does not, I will disown him. Freaking brat.',
      img: seattleAqa,
      alt: '',
      showDetails: false,
    },
    {
      locationName: 'Il Cielo',
      city: 'Los Angeles',
      description:
        'This was our first fancy dinner and I think this was the first time that I thought to myself, hmmm I think I might love this girl. Then I waited like another two weeks to make sure lol. Olive juice!!!',
      img: cielo,
      alt: '',
      showDetails: false,
    },
  ],
};

export default initialState;
