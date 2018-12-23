import advent from '../images/project-screenshots/advent.png';
// import calculator from '../images/project-screenshots/calculator.png';
import pomodoro from '../images/project-screenshots/pomodoro.png';
// import simon from '../images/project-screenshots/simon.png';
// import tetris from '../images/project-screenshots/tetris.png';
// import tictactoe from '../images/project-screenshots/tic-tac-toe.png';
import twitch from '../images/project-screenshots/twitch.png';

const projects = [
  // {
  //     title: 'Tic-Tac-Toe',
  //     description: 'Tic-Tac-Toe against a computer player built with the minimax algorithm',
  //     link: 'tic-tac-toe',
  //     image: tictactoe,
  // },
  // {
  //     title: 'Simon',
  //     description: 'The classic game',
  //     link: 'simon',
  //     image: simon,
  // },
  {
    title: 'Advent of Code',
    description: '2018 Advent of Code Challenge',
    link: 'advent',
    image: advent,
  },
  {
    title: 'Proximity Spheres',
    description: "Randomized spheres that gravitate to the mouse if it's within a given proximity",
    link: 'proximitySpheres',
    image: pomodoro,
  },
  {
    title: 'Gravity Simulator',
    description: 'Canvas based gravity simulator',
    link: 'gravity',
    image: pomodoro,
  },
  {
    title: 'Circular Motion',
    description: 'Particles moving in a circle and following the mouse pointer',
    link: 'circularMotion',
    image: twitch,
  },
  {
    title: 'Twitch Friends',
    description: 'An app for tracking Twitch friends',
    link: 'twitch',
    image: twitch,
  },
  {
    title: 'WikiViewer',
    description:
      'Wikipedia article viewer using the MediaWiki API and session storage to maintain the search string even after refreshing the page or navigating to Wikipedia and back.',
    link: 'wikiViewer',
    image: twitch,
  },
  {
    title: 'Pomodoro Timer',
    description: 'A pomodoro timer built for productivity',
    link: 'pomodoro',
    image: pomodoro,
  },
  // {
  //     title: 'Calculator',
  //     description: 'Calculator built in JavaScript',
  //     link: 'calculator',
  //     image: calculator,
  // },
  {
    title: 'Tetris',
    description: 'Tetris clone using HTML canvas',
    link: 'tetris',
    image: advent,
  },
];

export default projects;
