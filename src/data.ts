import { DataProps, Data } from "./types";

/* Data examples */

const general: DataProps[] = [
  {
    "id": 1,
    "question": "The more there is, the less you see. What am I?",
    "answer": "Darkness"
  },
  {
    "id": 2,
    "question": "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
    "answer": "Keyboard"
  },
  {
    "id": 3,
    "question": "What can be broken without being touched or even seen?",
    "answer": "Promise"
  },
  {
    "id": 4,
    "question": "What is so fragile that saying its name breaks it?",
    "answer": "Silence"
  },
  {
    "id": 5,
    "question": "I can only live where there is light, but I die if light shines on me. What am I?",
    "answer": "Shadow"
  }
];

const random: DataProps[] = [
  {
    "id": 1,
    "question": "What is always in front of you but can’t be seen?",
    "answer": "Future"
  },
  {
    "id": 2,
    "question": "What comes down but never goes up?",
    "answer": "Rain"
  },
  {
    "id": 3,
    "question": "What can be heard but not seen, and can’t be touched but is always around?",
    "answer": "Sound"
  },
  {
    "id": 4,
    "question": "What has a neck but no head?",
    "answer": "Bottle"
  },
  {
    "id": 5,
    "question": "What is a room you can’t enter?",
    "answer": "Mushroom"
  },
];

const movies: DataProps[] = [
  {
    "id": 1,
    "question": "I know what you did...",
    "answer": "last summer"
  },
  {
    "id": 2,
    "question": "Say hello to my...",
    "answer": "little friend"
  },
  {
    "id": 3,
    "question": "I'm going to make him an offer he...",
    "answer": "can't refuse"
  },
  {
    "id": 4,
    "question": "I'll be...",
    "answer": "back"
  },
  {
    "id": 5,
    "question": "May the force...",
    "answer": "be with you"
  }
];

const music: DataProps[] = [
  {
    "id": 1,
    "question": "Which artist released the song 'Freestyler' in 1999?",
    "answer": "Bomfunk MC's"
  },
  {
    "id": 2,
    "question": "Which artist released the song 'Californication' in 2000?",
    "answer": "Red Hot Chili Peppers"
  },
  {
    "id": 3,
    "question": "Which artist released the album 'Dude Ranch' in 1997?",
    "answer": "Blink-182"
  },
  {
    "id": 4,
    "question": "Which artist released the album 'Toxicity' in 2001?",
    "answer": "System of a Down"
  },
  {
    "id": 5,
    "question": "Which artist released the song 'Dr. Online' in 2001?",
    "answer": "Zeromancer"
  },
];

const esports: DataProps[] = [
  {
    "id": 1,
    "question": "Testing?",
    "answer": "Testing"
  }
];

const esports2: DataProps[] = [
  {
    "id": 1,
    "question": "Testing?",
    "answer": 'Testing'
  }
];

const data: Data = { general, random, movies, music, esports, esports2 };

export default data;