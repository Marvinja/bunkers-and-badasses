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
        ],
        bonus: '',
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
        ],
        bonus: '' 
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
        ],
        bonus: 'If Range 2 or Less: +2 Damage'
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
        ],
        bonus: ''
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
        ],
        bonus: 'If range 3+: +3 Accuracy'
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
        ],
        bonus: 'Splash'
    },
}

export const GUILD_BONUSES = {
    "Alas!": {
        common: "+1 DMG Mod",
        uncommon: "+2 DMG Mod",
        rare: "+3 DMG Mod",
        epic: "+3 DMG Mod",
        legendary: "+4 DMG Mod",
        elemental: 0,
    },
    "Skuldugger": {
        common: "+2 DMG Mod, Overheat 1d4",
        uncommon: "+3 DMG Mod, Overheat 1d6",
        rare: "+4 DMG Mod, Overheat 1d8",
        epic: "+5 DMG Mod, Overheat 1d10",
        legendary: "+6 DMG Mod, Overheat 1d12",
        elemental: 1,
    },
    "Dahlia": {
        common: "Burst: +1 Hit",
        uncommon: "Burst: +1 Hit, +1 ACC Mod",
        rare: "Burst: +1 Hit, +2 ACC Mod",
        epic: "Burst: +1 Hit, +3 ACC Mod",
        legendary: "Burst: +1 Hit, +4 ACC Mod",
        elemental: 1,
    },
    "Blackpowder": {
        common: "+2 ACC Mod: +2 Crit Damage",
        uncommon: "+2 ACC Mod: +3 Crit Damage",
        rare: "+2 ACC Mod: +4 Crit Damage",
        epic: "+2 ACC Mod: +5 Crit Damage",
        legendary: "+2 ACC Mod: +6 Crit Damage",
        elemental: 0,
    },
    "Malefactor": {
        common: "Elemental Roll, -2 DMG Mod",
        uncommon: "Elemental Roll, -2 DMG Mod",
        rare: "+10% Elemental Roll",
        epic: "+15% Elemental Roll",
        legendary: "+20% Elemental Roll",
        elemental: 2,
    },
    "Hyperius": {
        common: "+1 ACC Mod, -2 DMG Mod",
        uncommon: "+1 ACC Mod, -2 DMG Mod",
        rare: "+1 ACC Mod, -2 DMG Mod",
        epic: "+1 ACC Mod, -2 DMG Mod",
        legendary: "+1 ACC Mod, -2 DMG Mod",
        elemental: 1,
    },
    "Feriore": {
        common: "Swap/Reload: 1d4 Grenade Damage, -3 ACC Mod",
        uncommon: "Swap/Reload: 1d6 Grenade Damage, -3 ACC Mod",
        rare: "Swap/Reload: 1d8 Grenade Damage, -2 ACC Mod",
        epic: "Swap/Reload: 1d10 Grenade Damage, -2 ACC Mod",
        legendary: "Swap/Reload: 1d12 Grenade Damage, -1 ACC Mod",
        elemental: 1,
    },
    "Torgue": {
        common: "Splash, -4 ACC Mod",
        uncommon: "Splash, -3 ACC Mod",
        rare: "Splash, -2 ACC Mod",
        epic: "Splash, -1 ACC Mod",
        legendary: "Splash",
        elemental: 1,
    },
    "Stoker": {
        common: "Extra Attack, -3 ACC Mod",
        uncommon: "Extra Attack, -2 ACC Mod",
        rare: "Extra Attack, -1 ACC Mod",
        epic: "Extra Attack",
        legendary: "Extra Attack, Extra Movement",
        elemental: 1,
    },
}

export const ELEMENTAL_TABLE = {
    common: [
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "Radiation",
        "Corrosive",
        "Shock",
        "Explosive",
        "Incendiary",
        "Cryo",
    ],
    uncommon: [
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "Radiation",
        "Corrosive",
        "Shock",
        "Explosive",
        "Incendiary",
        "Cryo",
        "Radiation (+1d6)",
        "Corrosive (+1d6)",
        "Shock (+1d6)",
        "Explosive (+1d6)",
        "Incendiary (+1d6)",
        "Cryo (+1d6)",
    ],
    rare: [
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "Radiation",
        "Corrosive",
        "Shock",
        "Explosive",
        "Incendiary",
        "Cryo",
        "Radiation (+1d6)",
        "Corrosive (+1d6)",
        "Shock (+1d6)",
        "Explosive (+1d6)",
        "Incendiary (+1d6)",
        "Cryo (+1d6)",
        "Radiation (+2d6)",
        "Corrosive (+2d6)",
        "Shock (+2d6)",
        "Explosive (+2d6)",
        "Incendiary (+2d6)",
        "Cryo (+2d6)",
    ],
    epic: [
        "N/A",
        "Radiation",
        "Corrosive",
        "Shock",
        "Explosive",
        "Incendiary",
        "Cryo",
        "Radiation (+1d6)",
        "Corrosive (+1d6)",
        "Shock (+1d6)",
        "Explosive (+1d6)",
        "Incendiary (+1d6)",
        "Cryo (+1d6)",
        "Radiation (+2d6)",
        "Corrosive (+2d6)",
        "Shock (+2d6)",
        "Explosive (+2d6)",
        "Incendiary (+2d6)",
        "Cryo (+2d6)",
        "Radiation + Incendiary",
        "Shock + Corrosive",
        "Explosive + Cryo",
    ],
    legendary: [
        "N/A",
        "Radiation",
        "Corrosive",
        "Shock",
        "Explosive",
        "Incendiary",
        "Cryo",
        "Radiation (+1d6)",
        "Corrosive (+1d6)",
        "Shock (+1d6)",
        "Explosive (+1d6)",
        "Incendiary (+1d6)",
        "Cryo (+1d6)",
        "Radiation (+2d6)",
        "Corrosive (+2d6)",
        "Shock (+2d6)",
        "Explosive (+2d6)",
        "Incendiary (+2d6)",
        "Cryo (+2d6)",
        "Radiation + Incendiary",
        "Shock + Corrosive",
        "Explosive + Cryo",
    ],
}