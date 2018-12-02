const d1p1 = input => input.split('\n').reduce((acc, change) => acc + Number(change), 0);

const d1p1str =
    "const part1 = input => input.split('\\n').reduce((acc, change) => acc + Number(change), 0);";

const d1p2 = input => {
    const numArray = input.split('\n');
    const encountered = {};
    let total = 0;
    const duplicateFound = false;
    while (!duplicateFound) {
        for (let i = 0; i < numArray.length; i++) {
            const num = Number(numArray[i]);
            total += num;
            if (encountered[total]) {
                return total;
            }
            encountered[total] = true;
        }
    }
};

const d1p2str = `const part2 = input => {
    const numArray = input.split('\\n');
    const encountered = {};
    let total = 0;
    const duplicateFound = false;
    while (!duplicateFound) {
        for (let i = 0; i < numArray.length; i++) {
            const num = Number(numArray[i]);
            total += num;
            if (encountered[total]) {
                return total;
            }
            encountered[total] = true;
        }
    }
}`;

export { d1p1, d1p1str, d1p2, d1p2str };
