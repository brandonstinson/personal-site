import pomodoro from '../images/project-screenshots/pomodoro.png';
import tetris from '../images/project-screenshots/tetris.png';
import tictactoe from '../images/project-screenshots/tic-tac-toe.png';
import twitch from '../images/project-screenshots/twitch.png';

const projects = [
  {
    title: `Twitch Friends`,
    description: `Displays the stream info for a given list of friends`,
    link: `twitch`,
    image: twitch,
  },
  {
    title: `WikiViewer`,
    description: `Article viewer using the MediaWiki API and session storage`,
    link: `wikiViewer`,
    image: tetris,
  },
  {
    title: `Pomodoro Timer`,
    description: `A pomodoro timer with customizable interval times`,
    link: `pomodoro`,
    image: pomodoro,
  },
  {
    title: `Tic-Tac-Toe`,
    description: `Play against an unbeatable computer player built with the minimax algorithm`,
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
    description: `A CLI Countdown Timer`,
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
