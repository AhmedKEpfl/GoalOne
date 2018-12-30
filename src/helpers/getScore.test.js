import { getScore, getTotalScore } from "./getScore.js";
import _ from "lodash";

describe("Testing functions getScore and getTotalScore", () => {
    const referenceDate = Date.now();

    const dummyActionTypes = [
        {
            name: "Running 1km",
            scores: [
                {
                    startDate: referenceDate,
                    score: 1
                },
                {
                    startDate: referenceDate + 50000,
                    score: 0.75
                },
                {
                    startDate: referenceDate + 70000,
                    score: 2
                }
            ]
        },
        {
            name: "Working 30 min",
            scores: [
                {
                    startDate: referenceDate,
                    score: 2
                },
                {
                    startDate: referenceDate + 30000,
                    score: 1
                },
                {
                    startDate: referenceDate + 60000,
                    score: 2
                }
            ]
        },
        {
            name: "Eating 20 kcal sweets",
            scores: [
                {
                    startDate: referenceDate,
                    score: -1
                },
                {
                    startDate: referenceDate + 20000,
                    score: -2
                },
                {
                    startDate: referenceDate + 40000,
                    score: -4
                }
            ]
        }
    ];

    function getScoreDummy(actionTypeId, dateShift) {
        return getScore({ actionTypeId, actionTypes: dummyActionTypes, date: referenceDate + dateShift });
    }

    function getScoreNoDate(actionTypeId) {
        return getScore({ actionTypeId, actionTypes: dummyActionTypes });
    }

    test("Function getScore behaves correctly", () => {
        expect(getScoreDummy(1, 45000)).toEqual(1);
        expect(getScoreDummy(1, 10000)).toEqual(2);
        expect(getScoreDummy(2, 100000)).toEqual(-4);
        expect(getScoreDummy(2, -10000)).toEqual(-1);
        expect(getScoreDummy(0, -10000)).toEqual(1);
        expect(getScoreDummy(0, 0)).toEqual(1);
        expect(getScoreDummy(0, 50000)).toEqual(0.75);
    });

    test("Function getScore behaves correctly when date not provided", () => {
        expect(getScoreNoDate(0)).toEqual(1);
        expect(getScoreNoDate(1)).toEqual(2);
        expect(getScoreNoDate(2)).toEqual(-1);
    });

    const dummyActions0 = [
        {
            actionTypeId: 0,
            date: referenceDate - 10000
        },
        {
            actionTypeId: 2,
            date: referenceDate
        },
        {
            actionTypeId: 1,
            date: referenceDate + 10000
        },
        {
            actionTypeId: 1,
            date: referenceDate + 25000
        },
        {
            actionTypeId: 1,
            date: referenceDate + 50000
        },
        {
            actionTypeId: 2,
            date: referenceDate + 120000
        }
    ];

    const dummyActions1 = _.range(-1, 20).map((index) => ({
        actionTypeId: 2,
        date: referenceDate + (index * 4000)
    }));

    test("Function getTotalScore behaves correctly", () => {
        expect(getTotalScore({ actions: dummyActions0, actionTypes: dummyActionTypes})).toEqual(1);
        expect(getTotalScore({ actions: dummyActions1, actionTypes: dummyActionTypes})).toEqual(-56);
    });
})
