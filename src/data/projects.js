import pomodoro from '../images/project-screenshots/pomodoro.png';
import simon from '../images/project-screenshots/simon.png';
import tetris from '../images/project-screenshots/tetris.png';
import tictactoe from '../images/project-screenshots/tic-tac-toe.png';
import twitch from '../images/project-screenshots/twitch.png';

const projects = [
  {
    title: `Proximity Spheres`,
    description: `Randomized spheres that gravitate to the mouse if it's within a given proximity`,
    link: `proximitySpheres`,
    image: twitch,
  },
  {
    title: `Gravity Simulator`,
    description: `Canvas based gravity simulator`,
    link: `gravity`,
    image: simon,
  },
  {
    title: `Circular Motion`,
    description: `Particles moving in a circle and following the mouse pointer`,
    link: `circularMotion`,
    image: pomodoro,
  },
  {
    title: `Twitch Friends`,
    description: `An app for tracking Twitch friends`,
    link: `twitch`,
    image: twitch,
  },
  {
    title: `WikiViewer`,
    description: `Wikipedia article viewer using the MediaWiki API and session storage.`,
    link: `wikiViewer`,
    image: tetris,
  },
  {
    title: `Pomodoro Timer`,
    description: `A pomodoro timer built for productivity`,
    link: `pomodoro`,
    image: pomodoro,
  },
  {
    title: `Tic-Tac-Toe`,
    description: `Tic-Tac-Toe against a computer player built with the minimax algorithm`,
    link: `ticTacToe`,
    image: tictactoe,
  },
  // {
  //   title: `Simon`,
  //   description: `The classic game`,
  //   link: `simon`,
  //   image: simon,
  // },
  {
    title: `CLICT`,
    description: `A CLI Countdown Timer app`,
    link: `https://www.npmjs.com/package/clict`,
    image: tictactoe,
  },
  {
    title: `Tetris`,
    description: `Tetris clone using HTML canvas`,
    link: `tetris`,
    image: tetris,
  },
  {
    title: `Trelfaux`,
    description: `Trello clone using Redux, Firebase for auth, Firestore for the database, and session storage`,
    link: `https://trelfaux.netlify.com`,
    image: twitch,
  },
];

export default projects;
