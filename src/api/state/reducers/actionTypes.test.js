import actionTypes from "./actionTypes.js";

describe("Testing the actionTypes reducer", () => {
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

    test("Adding an action type: basic examples works well", () => {
        const newActionExpected = {
            name: "Reading 10 pages",
            score: 2,
            scores: [
                {
                    startDate: 0,
                    score: 2
                }
            ]
        };

        const expected = [
            ...dummyActionTypes,
            newActionExpected
        ];

        const actual0 = actionTypes(dummyActionTypes, { type: "ADD_ACTION_TYPE", actionType: newActionExpected });
        const actual1 = actionTypes(dummyActionTypes, {
            type: "ADD_ACTION_TYPE",
            actionType: {
                name: "Reading 10 pages",
                score: 2
            }
        });

        expect(actual0).toEqual(expected);
        expect(actual1).toEqual(expected);
    })
})
