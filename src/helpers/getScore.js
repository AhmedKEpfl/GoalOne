import _ from "lodash";
//NOTE use _.sortedIndex

export function getScore({ actionTypeId, date, actionTypes }) {

    // Scores can vary over time so we want to make sure we take these variations into account
    const scores = actionTypes[actionTypeId].scores;
    const sortedIndex = date ? _.sortedLastIndex(scores.map(o => o.startDate), date) - 1 : 0;
    const indexScore = Math.max(sortedIndex, 0);
    return scores[indexScore].score;
}

export function getTotalScore({ actions, actionTypes }) {
    console.log("DEBUG", {
        actions,
        actionTypes
    })
    return actions.reduce((acc, action) => acc + getScore({ ...action, actionTypes }), 0);
}
