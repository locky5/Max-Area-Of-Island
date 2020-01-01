var maxAreaOfIsland = function(grid) {
    let area = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            area = Math.max(area, dfs(grid, i, j))
        }
    }

    function dfs(grid, i, j, count = 0) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
            return count
        }

        count++
        grid[i][j] = 0

        count = dfs(grid, i + 1, j, count)
        count = dfs(grid, i - 1, j, count)
        count = dfs(grid, i, j + 1, count)
        count = dfs(grid, i, j - 1, count)

        return count
    }

    return area
};
