import d2data from '../../utils/data/adventOfCode/day-2';

const d2p1 = input => {
  const boxesArray = input.split('\n');
  let twos = 0;
  let threes = 0;
  boxesArray.forEach(box => {
    const boxArray = box.split('');
    const charCounts = {};
    boxArray.forEach(char => {
      charCounts[char] = charCounts[char] + 1 || 1;
    });
    const values = Object.values(charCounts);
    if (values.includes(2)) {
      twos += 1;
    }
    if (values.includes(3)) {
      threes += 1;
    }
  });
  return twos * threes;
};

const d2p1answer = d2p1(d2data);

const d2p1str = `part1 = input => {
  const boxesArray = input.split('\\n');
  let twos = 0;
  let threes = 0;
  boxesArray.forEach(box => {
    const boxArray = box.split('');
    const charCounts = {};
    boxArray.forEach(char => {
      charCounts[char] = charCounts[char] + 1 || 1;
    });
    const values = Object.values(charCounts);
    if (values.includes(2)) {
      twos += 1;
    }
    if (values.includes(3)) {
      threes += 1;
    }
  });
  return twos * threes;
}`;

const d2p2 = input => {
  const boxesArray = input.split('\n');
  for (let i = 0; i < boxesArray.length; i++) {
    const arrI = boxesArray[i].split('');
    for (let j = i + 1; j < boxesArray.length; j++) {
      const arrJ = boxesArray[j].split('');
      let diffs = 0;
      const diffPositions = [];
      for (let l = 0; l < arrI.length; l++) {
        if (arrI[l] !== arrJ[l]) {
          diffs += 1;
          diffPositions.push(l);
        }
      }
      if (diffs === 1) {
        arrI.splice(diffPositions[0], 1);
        return arrI.join('');
      }
    }
  }
};

const d2p2answer = d2p2(d2data);

const d2p2str = `const part2 = input => {
  const boxesArray = input.split('\\n');
  for (let i = 0; i < boxesArray.length; i++) {
    const arrI = boxesArray[i].split('');
    for (let j = i + 1; j < boxesArray.length; j++) {
      const arrJ = boxesArray[j].split('');
      let diffs = 0;
      const diffPositions = [];
      for (let l = 0; l < arrI.length; l++) {
        if (arrI[l] !== arrJ[l]) {
          diffs += 1;
          diffPositions.push(l);
        }
      }
      if (diffs === 1) {
        arrI.splice(diffPositions[0], 1);
        return arrI.join('');
      }
    }
  }
}`;

export { d2p1answer, d2p1str, d2p2answer, d2p2str };
