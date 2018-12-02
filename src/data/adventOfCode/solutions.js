import d1data from './day-1-input';
import { d1p1, d1p1str, d1p2, d1p2str } from './day1';

import d2data from './day-2-input';
import { d2p1, d2p1str, d2p2, d2p2str } from './day2';

const solutions = [
    {
        title: '--- Day 1: Chronal Calibration ---',
        link: 'https://adventofcode.com/2018/day/1',
        dataLink: 'https://adventofcode.com/2018/day/1/input',
        part1: {
            answer: d1p1(d1data),
            code: d1p1str,
        },
        part2: {
            answer: d1p2(d1data),
            code: d1p2str,
        },
    },
    {
        title: '--- Day 2: Inventory Management System ---',
        link: 'https://adventofcode.com/2018/day/2',
        dataLink: 'https://adventofcode.com/2018/day/2/input',
        part1: {
            answer: d2p1(d2data),
            code: d2p1str,
        },
        part2: {
            answer: d2p2(d2data),
            code: d2p2str,
        },
    },
];

export default solutions;
