function knightMoves(start, end) {
    const moves = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
    ];

    const queue = [[start]];
    const visited = new Set([start]);

    while (queue.length) {
        const path = queue.shift();
        const current = path[path.length - 1];

        if (current[0] === end[0] && current[1] === end[1]) {
            return path;
        }

        for (const m of moves) {
            const nextX = current[0] + m[0];
            const nextY = current[1] + m[1];
            const next = [nextX, nextY];

            // Check if within bounds of 8x8 chessboard and not already visited
            if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8 && !visited.has(next)) {
                visited.add(next);
                queue.push([...path, next]);
            }
        }
    }
    return [];
}

function printPath(path) {
    if (path.length === 0) {
        console.log("Could not find a path from the start to the end.");
    } else {
        console.log(`You made it in ${path.length - 1} move(s)! Here is your path:`);
        for (const square of path) {
            console.log(square);
        }
    }
}

const shortestPath = knightMoves([3, 3], [6, 6]);
printPath(shortestPath);



