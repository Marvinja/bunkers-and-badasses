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
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 2, crits: 0 },
                    "16+": { hits: 3, crits: 0 },
                },
                damage: [2,4],
                range: 5,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 1 },
                    "16+": { hits: 3, crits: 1 },
                },
                damage: [1,6],
                range: 5,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 2, crits: 0 },
                    "16+": { hits: 2, crits: 1 },
                },
                damage: [2,6],
                range: 5,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 1 },
                    "16+": { hits: 1, crits: 2 },
                },
                damage: [2,8],
                range: 5,
            },
            {
                accuracy: {
                    "2-7": { hits: 2, crits: 0 },
                    "8-15": { hits: 2, crits: 1 },
                    "16+": { hits: 2, crits: 2 },
                },
                damage: [2,8],
                range: 5,
            },
        ],
        bonus: '',
    },
    "Submachine Gun": {
        tier: [
            {
                accuracy: {
                    "2-7": { hits: 2, crits: 0 },
                    "8-15": { hits: 3, crits: 0 },
                    "16+": { hits: 5, crits: 0 },
                },
                damage: [1,4],
                range: 5,
            },
            {
                accuracy: {
                    "2-7": { hits: 2, crits: 0 },
                    "8-15": { hits: 4, crits: 0 },
                    "16+": { hits: 5, crits: 1 },
                },
                damage: [2,4],
                range: 5,
            },
            {
                accuracy: {
                    "2-7": { hits: 2, crits: 0 },
                    "8-15": { hits: 3, crits: 1 },
                    "16+": { hits: 5, crits: 1 },
                },
                damage: [1,6],
                range: 5,
            },
            {
                accuracy: {
                    "2-7": { hits: 2, crits: 0 },
                    "8-15": { hits: 2, crits: 1 },
                    "16+": { hits: 4, crits: 1 },
                },
                damage: [2,6],
                range: 5,
            },
            {
                accuracy: {
                    "2-7": { hits: 2, crits: 2 },
                    "8-15": { hits: 3, crits: 2 },
                    "16+": { hits: 5, crits: 2 },
                },
                damage: [1,10],
                range: 5,
            },
        ],
        bonus: '' 
    },
    "Shotgun": {
        tier: [
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 2, crits: 0 },
                    "16+": { hits: 1, crits: 1 },
                },
                damage: [1,8],
                range: 4,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 2, crits: 0 },
                    "16+": { hits: 2, crits: 1 },
                },
                damage: [2,8],
                range: 4,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 1 },
                    "8-15": { hits: 2, crits: 1 },
                    "16+": { hits: 2, crits: 2 },
                },
                damage: [1,8],
                range: 4,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 1 },
                    "16+": { hits: 2, crits: 1 },
                },
                damage: [2,10],
                range: 4,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 1 },
                    "8-15": { hits: 2, crits: 1 },
                    "16+": { hits: 2, crits: 2 },
                },
                damage: [1,12],
                range: 4,
            },
        ],
        bonus: 'If Range 2 or Less: +2 Damage'
    },
    "Combat Rifle": {
        tier: [
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 3, crits: 0 },
                    "16+": { hits: 3, crits: 1 },
                },
                damage: [1,6],
                range: 6,
            },
            {
                accuracy: {
                    "2-7": { hits: 2, crits: 0 },
                    "8-15": { hits: 3, crits: 0 },
                    "16+": { hits: 2, crits: 1 },
                },
                damage: [1,8],
                range: 6,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 1 },
                    "8-15": { hits: 2, crits: 1 },
                    "16+": { hits: 2, crits: 2 },
                },
                damage: [1,8],
                range: 6,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 2, crits: 1 },
                    "16+": { hits: 3, crits: 1 },
                },
                damage: [2,6],
                range: 6,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 1 },
                    "8-15": { hits: 2, crits: 1 },
                    "16+": { hits: 2, crits: 3 },
                },
                damage: [1,10],
                range: 6,
            },
        ],
        bonus: ''
    },
    "Sniper Rifle": {
        tier: [
            {
                accuracy: {
                    "2-7": { hits: 0, crits: 0 },
                    "8-15": { hits: 1, crits: 0 },
                    "16+": { hits: 1, crits: 1 },
                },
                damage: [1,10],
                range: 8,
            },
            {
                accuracy: {
                    "2-7": { hits: 0, crits: 0 },
                    "8-15": { hits: 1, crits: 0 },
                    "16+": { hits: 1, crits: 1 },
                },
                damage: [1,12],
                range: 8,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 1 },
                    "16+": { hits: 1, crits: 2 },
                },
                damage: [1,10],
                range: 8,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 1 },
                    "16+": { hits: 1, crits: 2 },
                },
                damage: [2,10],
                range: 8,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 1 },
                    "16+": { hits: 2, crits: 2 },
                },
                damage: [1,12],
                range: 8,
            },
        ],
        bonus: 'If range 3+: +3 Accuracy'
    },
    "Rocket Launcher": {
        tier: [
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 0 },
                    "16+": { hits: 1, crits: 1 },
                },
                damage: [1,12],
                range: 4,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 0 },
                    "16+": { hits: 1, crits: 1 },
                },
                damage: [2,10],
                range: 4,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 0 },
                    "16+": { hits: 1, crits: 2 },
                },
                damage: [1,12],
                range: 4,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 0 },
                    "8-15": { hits: 1, crits: 0 },
                    "16+": { hits: 2, crits: 1 },
                },
                damage: [2,12],
                range: 4,
            },
            {
                accuracy: {
                    "2-7": { hits: 1, crits: 1 },
                    "8-15": { hits: 1, crits: 1 },
                    "16+": { hits: 2, crits: 1 },
                },
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

export const PREFIXES = {
    "Aback": "Enemies Hit in the front are spun backwards",
    "Aberrant": "Gains the stats of a random gun type",
    "Abhorrent": "Enemies cannot stay within 1 square while this gun is equipped",
    "Abiding": "Grants +1 to all Search Checks while equipped",
    "Abrasive": "Adds +1 Crit to Melee Attacks",
    "Actually": "Can reroll Accuracy once per turn when firing this gun",
    "Adhesive": "Enemies Hit begin to stick to anything they come into contact with",
    "Adorable": "25% chance to distract Enemies with baby animal hallucinations",
    "Bitter": "Enemies get -1 to their Attack Rolls for each Enemy killed by this gun in this encounter",
    "Boundless": "Generates a Loot Pile when it Hits an Enemy",
    "Breezy": "Enemies targeted are struck by a gust of wind that pushes them 1 square backwards",
    "Certain": "Grants a +2 bonus during Badass attempts",
    "Cheerful": "Grants +1 to all Talk Checks while equipped",
    "Classy": "Gun will only fire if the wielder has the pinky of their hand shooting out",
    "Clever": "Grants +1 to all Insight Checks while equipped",
    "Critical": "Rolled hits become Crits. Rolled Crits become misses",
    "Damp": "Creates puddles of water under Enemies Hit",
    "Deafening": "Screams when fired, dealing 1 Damage to all adjacent targets",
    "Disgusted": "Deals +1d6 Corrosive Damage. Enemies killed die badly",
    "Eatable": "Can consume the gun when Reloading to gain 2d4 Health",
    "Economic": "Enemies drop 2 gold per Hit and 5 gold per Crit",
    "Elfin": "Increases Movement by 1 square while firing",
    "Exciting": "50% chance for Explosive rounds",
    "Far-Flung": "Double the Range of any Thrown item while this gun is equipped",
    "Far": "Double the Range of this gun",
    "Few": "Max 1 Hit. Deal an additional 3 damage for each unused Hit",
    "Fresh": "First Attack of an encounter deals 2x Damage",
    "Frightening": "Enemies within 2 squares are compelled to take Cover",
    "Gaudy": "Highly reflective, which can be used to temporarily blind Enemies, giving them -3 on Attack Rolls",
    "Grey": "Deals 2x Damage. Enemies Hit drop 1 less Loot Pile and only drop Common items",
    "Grotesque": "Gun looks horrific, possibly cursed. A counter increases every time it kills an Enemy",
    "Handsomely": "Add Damage equal to your Talk modifier",
    "Holistic": "Damage is dealt to Shield Armor, and Health",
    "Honorable": "All rounds Hit Enemies in the front",
    "Horrible": "Enemies killed by this gun explode",
    "Humdrum": "Enemies Hit experience ennui",
    "Hysterical": "Enemies Hit burst out laughing. cause -1 to Attack Rolls",
    "Imaginary": "Appears as if you are not holding any gun. Makes fake firing noises when fired",
    "Imminent": "Enemies Hit take increasing Damage each turn. Damage starts at 1 and increases by 1 with each Hit/turn",
    "Impolite": "Randomly burps out a Loot Pile when fired",
    "Incandescent": "Shines brighter when being fired",
    "Jazzy": "10% chance the non-Boss Enemy lets go of any weapons and starts doing 'jazz hands'",
    "Joyous": "Plays upbeat music when being fired",
    "Jumbled": "Has the Accuracy and Damage of one gun type, but the Range and bonuses of another",
    "Knotty": "Ties an Enemy's shoes together, reducing their Movement by 1",
    "Knowing": "Knows all. Can ask the gun a question once per day",
    "Labored": "Adds +3 DMG Mod if standing still",
    "Legal": "Enemies Hit are considered to be under a legally binding contract to drop 1 extra Loot Pile when they die",
    "Light": "Fires rays of light that deal +1d6 Incendiary Damage",
    "Lively": "This gun has an AI that thinks it's alive. It can open any door once per day",
    "Mad": "Enemies Hit have a 50% chance of being Taunted",
    "Madly": "Enemies Hit have 50% chance of becoming Confused",
    "Mixed": "For each Hit/Crit, gather the next die for Damage. d6, d8, d10, d12, d20",
    "Mundane": "Grants +1 to all Sneak Checks while equipped",
    "Normal": "Appearance of a Common gun",
    "Nutty": "Instantly kills any Enemy with a nut allergy",
    "Obnoxious": "Guaranteed Insight Check once per day at the cost of having to listen to the gun drone on and on and on",
    "Obtainable": "Must be picked up using an Interact (17+) Check. Deals 2x Damage",
    "One": "Can only be fired once per day",
    "Open": "Once per turn, you may Reload this gun as a free Action without generating Mayhem",
    "Overconfident": "If Accuracy Roll is 10 or less, all Hits are Crits",
    "Panoramic": "Fires in a 180 degree arc. Hits/Crits can each be applied to a different enemy in Range",
    "Parallel": "Rounds split into 2 parellel lines that can Hit Enemies in 2 adjacent squares",
    "Practical": "Swapping to a different gun grants the wielder a Badass Token",
    "Pumped": "Lifts Enemies Hit a foot off the ground",
    "Puny": "Appearance of a miniature gun",
    "Questionable": "Deals 2x Damage to Enemies that can question their existence",
    "Relevant": "Will deliver cryptic information on a topic up to 3x a day",
    "Resolute": "Cannot be fired on the first turn of an encounter. Deals 2x Damage",
    "Same": "Enemies Hit will take an equal amount of Damage from the gun for each Attack",
    "Scintillating": "50% chance to Hit the chest or groin of Enemy",
    "Selfish": "Deals 1d6 Damage to wielder when changing to another equipped gun",
    "Several": "Splits into 2 guns that are dual wielded",
    "Shaky": "Gun shakes uncontrollably. Enemies Hit also shake uncontrollably",
    "Sleepy": "Enemies Hit are Slowed",
    "Small": "Can have a 4th gun equipped as long as this gun is equipped",
    "Smelly": "Enemies Hit take 1d6 Radiation Damage",
    "Splendid": "Deals 2x Damage to Badass-type Enemies",
    "Strong": "Grants +1 to all Interact Checks while equipped",
    "Stupendous": "Double the Hits of this gun. Attacks deal 2d4 Damage to the wielder",
    "Suitable": "Can disguise the wielder in a suit of any kind once per day",
    "Superb": "Grants +1 to Mods on the gun",
    "Swift": "Grants a free Melee Attack each turn",
    "Synonymous": "Grants Guild bonuses twice",
    "Tart": "Enemies react as if they have eaten something tart, getting -1 to their next Attack Roll",
    "Tawdry": "When Reloaded, becomes a grenade that deals 3d8 Damage",
    "Tender": "Converts 10% of Damage dealt into Health for an adjacent ally",
    "Tense": "30% chance to taze the Enemy, dealing 1d6 Shock Damage",
    "Thirsty": "Converts 10% of Damage dealt into Health",
    "Toothsome": "Gets a Bite Attack each turn for 1d6 Damage to an adjacent target",
    "Towering": "Wielder appears twice their size while gun is equipped",
    "Two": "Creates a duplicate gun. Must be fired at the same time. 3x Damage",
    "Unable": "Enemies hit cannot take Mayhem Actions",
    "Unfair": "An Extra Attack with this gun does not generate Mayhem",
    "Unwieldy": "Twice the size of a normal gun. 2x Damage. Reloading takes 2 turns",
    "Utter": "There is a secret password that activates 3x Damage for the next 2 turns. Wielder can guess once per encounter",
    "Woozy": "Each time an Enemy is Hit by this gun, 10% chance they pass out",
    "Worried": "Crits have a 50% chance to make BR 8 or less Enemies flee",
    "Wrathful": "Deals 2x Damage to Enemies that have Damaged the wielder",
    "Zesty": "Enemies killed by this gun grant the wielder 1 Badass Token"
  }

  export const RED_PREFIXES = [
    "POP POP!",
    "I never freeze",
    "Toasty!",
    "Was he slow?",
    "We Hate You, Please Die.",
    "Tell them they're next",
    "PAN SHOT!",
    "Envision Wyverns",
    "I'm melting!",
    "The same thing that happens to everything else",
    "360 quickscope",
    "Any Questions!",
    "Blood and Thunder",
    "SI VIS PACEM, PARA BELLUM",
    "You're breathtaking!",
    "Pass turn.",
    "I am Vengeance!",
    "Roll the dice",
    "One among the fence",
    "Don't be sorry. Be better.",
    "THE PICKLES!",
    "Do a kickflip!",
    "Extinction is the Rule",
    "Never Fight a Knight with a Perm",
    "Bye bye, little Butt Stallion",
    "Time 2 Hack",
    "Hate Magic... so much",
    "OFF WITH THEIR HEADS!",
    "This is my BOOMSTICK!",
    "Super easy, barely an inconvenience",
    "Hold onto your butts.",
    "The Wise Man's Fear",
    "I don't want this isolation",
    "TUFF with two Fs",
    "Unlikely Maths",
    "Gravity's Rainbow",
    "Let's do this one last time...",
    "BIP!",
    "The Heaviest Matter of the Universe",
    "GREEN FLAME",
    "More like Bore Ragnarok!",
    "That's levitation, Holmes!",
    "Let's boo-boo.",
    "Mmm Watcha Say...",
    "Here Comes the FunCooker",
    "Overwhelming strength is boring.",
    "Stop talking, I will win. It's what heroes do.",
    "Richer and cleverer than everyone else!",
    "METAL WILL DESTROY ALL EVIL!",
    "Life is conundrum of esoterica"
  ]