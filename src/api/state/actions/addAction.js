export default addAction = ({ actionTypeId, date }) => {
    const currentDate = date || Date.now();
    return {
        type: "ADD_ACTION",
        action: {
            actionTypeId,
            date
        }
    };
};
