function getTotalScore(actions) {
    return actions.reduce((acc, action) => acc + getScore(action._id), 0);
}
