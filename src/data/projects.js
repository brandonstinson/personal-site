import clict from '../images/project-screenshots/clict.png';
import pomodoro from '../images/project-screenshots/pomodoro.png';
import tetris from '../images/project-screenshots/tetris.png';
import tictactoe from '../images/project-screenshots/tictactoe.png';
import trelfaux from '../images/project-screenshots/trelfaux.png';
import twitch from '../images/project-screenshots/twitch.png';
import wikiviewer from '../images/project-screenshots/wikiviewer.png';

const projects = [
  {
    title: `Twitch Friends`,
    description: `Displays the stream info for a given list of friends`,
    link: `twitch`,
    image: twitch,
    repo: `https://github.com/brandonstinson/personal-site/tree/master/src/components/twitch`,
  },
  {
    title: `WikiViewer`,
    description: `Article viewer using the MediaWiki API and session storage`,
    link: `wikiViewer`,
    image: wikiviewer,
    repo: `https://github.com/brandonstinson/personal-site/tree/master/src/components/wikiViewer`,
  },
  {
    title: `Pomodoro Timer`,
    description: `A pomodoro timer with customizable interval times`,
    link: `pomodoro`,
    image: pomodoro,
    repo: `https://github.com/brandonstinson/personal-site/tree/master/src/components/pomodoro`,
  },
  {
    title: `Tic-Tac-Toe`,
    description: `Play against an unbeatable computer player built with the minimax algorithm`,
    link: `ticTacToe`,
    image: tictactoe,
    repo: `https://github.com/brandonstinson/personal-site/tree/master/src/components/ticTacToe`,
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
    image: clict,
    repo: `https://github.com/brandonstinson/clict`,
  },
  {
    title: `Tetris`,
    description: `Tetris clone using HTML canvas`,
    link: `tetris`,
    image: tetris,
    repo: `https://github.com/brandonstinson/personal-site/tree/master/src/components/tetris`,
  },
  {
    title: `Trelfaux`,
    description: `Trello clone using Redux, Firebase for auth, Firestore for the database, and session storage`,
    link: `https://trelfaux.netlify.com`,
    image: trelfaux,
    repo: `https://github.com/brandonstinson/trelfaux`,
  },
];

export default projects;
