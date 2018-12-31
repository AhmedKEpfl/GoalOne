export function getDefaultScores(score) {
    return [
        {
            startDate: 0,
            score: Number(score)
        }
    ]
}

export const defaultActions = [
    {
        name: "Running 1km",
        scores: getDefaultScores(1)
    },
    {
        name: "Working 30 min",
        scores: getDefaultScores(1)
    },
    {
        name: "Meditation 10 min",
        scores: getDefaultScores(1)
    },
    {
        name: "Playing video games 15 min",
        scores: getDefaultScores(-1)
    }
]
