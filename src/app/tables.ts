export const GUN_GUILDS = [
    'Alas!',
    'Skuldugger',
    'Feriore',
    'Dahlia',
    'Blackpowder',
    'Malefactor',
    'Stoker',
    'Hyperius',
    'Torgue',
];

export const GUN_TABLE = [
    ["Skuldugger", "Feriore", "Dahlia", "Blackpowder", "Alas!", "Malefactor", "Stoker", "Hyperius"],
    ["Malefactor", "Skuldugger", "Hyperius", "Feriore", "Torgue", "Dahlia", "Skuldugger", "Feriore"],
    ["Hyperius", "Blackpowder", "Skuldugger", "Feriore", "Torgue", "Stoker", "Alas!", "Malefactor"],
    ["Feriore", "Dahlia", "Torgue", "Stoker", "Hyperius", "Alas!", "Dahlia", "Alas!"],
    ["Skuldugger", "Alas!", "Blackpowder", "Malefactor", "Dahlia", "Hyperius", "Stoker", "Torgue"],
    ["Stoker", "Torgue", "Malefactor", "Hyperius", "Stoker", "Torgue", "Malefactor", "Hyperius"],
    ["Torgue", "Dahlia", "Blackpowder", "Skuldugger", "Blackpowder", "Feriore", "Blackpowder", "Any"],
];

export const GUN_RARITIES = [
    'Common',
    'Common (Element Roll)',
    'Uncommon',
    'Uncommon (Element Roll)',
    'Rare',
    'Rare (Element Roll)',
    'Epic',
    'Epic (Element Roll)',
    'Legendary',
    'Legendary (Element Roll)',
];


export const GUN_RARTIY_TABLE = [
    [1,2,2,3,4,5],
    [1,2,3,4,6,7],
    [4,5,6,7,8,10],
    [6,6,8,8,10,10]
];

export const GUN_TYPE_STATS = {
    "Pistol": {
        tier: [
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 2, crits: 0 },
                    { hits: 3, crits: 0 },
                ],
                damage: [2,4],
                range: 5,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                    { hits: 3, crits: 1 },
                ],
                damage: [1,6],
                range: 5,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 2, crits: 0 },
                    { hits: 2, crits: 1 },
                ],
                damage: [2,6],
                range: 5,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                    { hits: 1, crits: 2 },
                ],
                damage: [2,8],
                range: 5,
            },
            {
                accuracy: [
                    { hits: 2, crits: 0 },
                    { hits: 2, crits: 1 },
                    { hits: 2, crits: 2 },
                ],
                damage: [2,8],
                range: 5,
            },
        ] 
    },
    "Submachine Gun": {
        tier: [
            {
                accuracy: [
                    { hits: 2, crits: 0 },
                    { hits: 3, crits: 0 },
                    { hits: 5, crits: 0 },
                ],
                damage: [1,4],
                range: 5,
            },
            {
                accuracy: [
                    { hits: 2, crits: 0 },
                    { hits: 4, crits: 0 },
                    { hits: 5, crits: 1 },
                ],
                damage: [2,4],
                range: 5,
            },
            {
                accuracy: [
                    { hits: 2, crits: 0 },
                    { hits: 3, crits: 1 },
                    { hits: 5, crits: 1 },
                ],
                damage: [1,6],
                range: 5,
            },
            {
                accuracy: [
                    { hits: 2, crits: 0 },
                    { hits: 2, crits: 1 },
                    { hits: 4, crits: 1 },
                ],
                damage: [2,6],
                range: 5,
            },
            {
                accuracy: [
                    { hits: 2, crits: 2 },
                    { hits: 3, crits: 2 },
                    { hits: 5, crits: 2 },
                ],
                damage: [1,10],
                range: 5,
            },
        ] 
    },
    "Shotgun": {
        tier: [
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 2, crits: 0 },
                    { hits: 1, crits: 1 },
                ],
                damage: [1,8],
                range: 4,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 2, crits: 0 },
                    { hits: 2, crits: 1 },
                ],
                damage: [2,8],
                range: 4,
            },
            {
                accuracy: [
                    { hits: 1, crits: 1 },
                    { hits: 2, crits: 1 },
                    { hits: 2, crits: 2 },
                ],
                damage: [1,8],
                range: 4,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                    { hits: 2, crits: 1 },
                ],
                damage: [2,10],
                range: 4,
            },
            {
                accuracy: [
                    { hits: 1, crits: 1 },
                    { hits: 2, crits: 1 },
                    { hits: 2, crits: 2 },
                ],
                damage: [1,12],
                range: 4,
            },
        ] 
    },
    "Combat Rifle": {
        tier: [
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 3, crits: 0 },
                    { hits: 3, crits: 1 },
                ],
                damage: [1,6],
                range: 6,
            },
            {
                accuracy: [
                    { hits: 2, crits: 0 },
                    { hits: 3, crits: 0 },
                    { hits: 2, crits: 1 },
                ],
                damage: [1,8],
                range: 6,
            },
            {
                accuracy: [
                    { hits: 1, crits: 1 },
                    { hits: 2, crits: 1 },
                    { hits: 2, crits: 2 },
                ],
                damage: [1,8],
                range: 6,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 2, crits: 1 },
                    { hits: 3, crits: 1 },
                ],
                damage: [2,6],
                range: 6,
            },
            {
                accuracy: [
                    { hits: 1, crits: 1 },
                    { hits: 2, crits: 1 },
                    { hits: 2, crits: 3 },
                ],
                damage: [1,10],
                range: 6,
            },
        ] 
    },
    "Sniper Rifle": {
        tier: [
            {
                accuracy: [
                    { hits: 0, crits: 0 },
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                ],
                damage: [1,10],
                range: 8,
            },
            {
                accuracy: [
                    { hits: 0, crits: 0 },
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                ],
                damage: [1,12],
                range: 8,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                    { hits: 1, crits: 2 },
                ],
                damage: [1,10],
                range: 8,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                    { hits: 1, crits: 2 },
                ],
                damage: [2,10],
                range: 8,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                    { hits: 2, crits: 2 },
                ],
                damage: [1,12],
                range: 8,
            },
        ] 
    },
    "Rocket Launcher": {
        tier: [
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                ],
                damage: [1,12],
                range: 4,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 1 },
                ],
                damage: [2,10],
                range: 4,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 2 },
                ],
                damage: [1,12],
                range: 4,
            },
            {
                accuracy: [
                    { hits: 1, crits: 0 },
                    { hits: 1, crits: 0 },
                    { hits: 2, crits: 1 },
                ],
                damage: [2,12],
                range: 4,
            },
            {
                accuracy: [
                    { hits: 1, crits: 1 },
                    { hits: 1, crits: 1 },
                    { hits: 2, crits: 1 },
                ],
                damage: [1,20],
                range: 4,
            },
        ] 
    },
}

