function knightMoves(start, end) {
    let steps = 0
    let path = {};

    let moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]]

    let visited = new Set()
    let queue = [start]

    while (queue.length > 0) {
        let next = []
        while (queue.length > 0) {
            let current = queue.shift();
            let currentX = current[0];
            let currentY = current[1];
            console.log([currentX, currentY])

            if (currentX === end[0] && currentY === end[1]) {
                return steps;
            }

            for (let m of moves) {
                let nextX = currentX + m[0];
                let nextY = currentX + m[1];

                // Check if within 8x8 chess board
                if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8) {
                    if (!visited.has(nextX + "," + nextY)) {
                        visited.add([nextX + "," + nextY])
                        console.log([nextX, nextY]);
                    }
                }
            }
        }
        steps++;
        queue = next;
    }
}

knightMoves([0, 0], [7, 5]);