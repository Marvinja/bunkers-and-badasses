import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ELEMENTAL_TABLE, GUILD_BONUSES, GUN_GUILDS, GUN_RARITIES, GUN_RARTIY_TABLE, GUN_TABLE, PREFIXES } from './tables';
import { GunCardComponent } from './gun-card/gun-card.component';
import { PrefixTypes } from './types';

export const gunTypeResults = [
  "Pistol",
  "Submachine Gun",
  "Shotgun",
  "Combat Rifle",
  "Sniper Rifle",
  "Rocket Launcher",
  "You rolled a 7",
  "Favored Gun"
];

export type GunTypes = "Pistol" | "Submachine Gun" | "Shotgun" | "Combat Rifle" | "Sniper Rifle" | "Rocket Launcher" | undefined;
export type GuildTypes = "Alas!" | "Skuldugger" | "Dahlia" | "Blackpowder" | "Malefactor" | "Hyperius" | "Feriore" | "Torgue" | "Stoker" | undefined;
export type RarityTypes = "common" | "uncommon" | "rare" | "epic" | "legendary";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, GunCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Bunkers and Badasses Angular';
  
  gunForm = new FormGroup({
    type: new FormControl('Pistol'),
    guild: new FormControl('Alas!')
  })
  
  gunTypeRoll!: number;
  gunGuildRoll!: number;
  gunRarityRoll!: number[];
  gunElementRoll!: number;
  gunPrefixRoll!: number;

  
  private _gunType!: GunTypes;
  get gunType() {
    return this._gunType;
  }
  set gunType(type: GunTypes) {
    this._gunType = type;
  }
  
  private _gunGuild!: GuildTypes;
  get gunGuild() {
    return this._gunGuild;
  }
  set gunGuild(guild: GuildTypes) {
    this._gunGuild = guild;
  }

  private _gunRarity!: RarityTypes;
  get gunRarity() {
    return this._gunRarity;
  }
  set gunRarity(rarity: RarityTypes) {
    this._gunRarity = rarity;
  }

  private _gunElement!: string;
  get gunElement() {
    return this._gunElement;
  }
  set gunElement(element: string) {
    this._gunElement = element;
  }

  private _gunPrefix!: PrefixTypes;
  get gunPrefix() {
    return this._gunPrefix;
  }
  set gunPrefix(prefix: PrefixTypes) {
    this._gunPrefix = prefix;
  }

  private _Roll(dieType: number) {
    return Math.ceil(Math.random() * dieType);
  }

  constructor(private router: Router) {}

  generateNewGun() {
    //Reset 
    this.gunForm = new FormGroup({
      type: new FormControl('Pistol'),
      guild: new FormControl('Alas!')
    })

    //New Gun

    //Step 1 - Rolling Gun Type
    this.gunTypeRoll = this._Roll(8);
    let gunTypeResult = gunTypeResults[this.gunTypeRoll-1];
    console.log('Rolling Gun Type', this.gunTypeRoll, this.gunTypeRoll === 8 ? 'Choice' : gunTypeResult);

    //Step 2 - Rolling Gun Guild
    this.gunGuildRoll = this._Roll(8);
    if (this.gunTypeRoll < 7) {
      this.gunGuild = this.getGuild(this.gunTypeRoll, this.gunGuildRoll) as GuildTypes;
      this.gunType = gunTypeResults[this.gunTypeRoll-1] as GunTypes;
      console.log('Rolling Gun Guild', this.gunGuildRoll, this.gunGuild);
    } else if (this.gunTypeRoll === 7) {
      if (this.gunGuildRoll === 8) {
        gunTypeResult = '';
        this.gunGuild = undefined;
        this.gunForm = new FormGroup({
          type: new FormControl({value: 'Rocket Launcher', disabled: true}),
          guild: new FormControl('Alas!')
        })
      } else {
        this.gunGuild = this.getGuild(this.gunTypeRoll, this.gunGuildRoll) as GuildTypes;
        this.gunTypeRoll = [1, 3, 1, 2, 3, 4, 5, 6][this.gunGuildRoll-1];
        this.gunType = gunTypeResults[this.gunTypeRoll-1] as GunTypes;
      }
      console.log('You rolled a 7', this.gunType, this.gunTypeRoll, this.gunGuild, this.gunGuildRoll);
    } else {
      this.gunType = this.gunGuild = undefined;
    }

    //Step 3 - Rolling Gun Rarity
    this.gunRarityRoll = [this._Roll(4), this._Roll(6)];
    let gunRarityResult = this.getRarity(this.gunRarityRoll);
    this.gunRarity = this.convertRarityToRarityType(gunRarityResult);
    console.log('Rolling Gun Rarity', this.gunRarityRoll, gunRarityResult);

    //Step 6 - Element
    this.gunElementRoll = this._Roll(100);
    if (this.gunGuild === "Malefactor") {
      switch(this.gunRarity) {
        case 'rare':
          this.gunElementRoll += 10;
          break;
        case 'epic': 
          this.gunElementRoll += 15;
          break;
        case 'legendary': 
          this.gunElementRoll += 20;
          break;
      }
    }
    console.log('Rolling Gun Element', this.gunElementRoll, this.getElement(this.gunElementRoll));
    if (!!this.gunGuild && GUILD_BONUSES[this.gunGuild].elemental != 0 && gunRarityResult.includes('(Element Roll)') || this.gunGuild === "Malefactor") {
      this.gunElement = this.getElement(this.gunElementRoll);
    } else { 
      this.gunElement = 'N/A'
    }
    
    //Step 7 - Prefixes
    this.gunPrefixRoll = this._Roll(Object.keys(PREFIXES).length);
    this.gunPrefix = Object.keys(PREFIXES)[this.gunPrefixRoll] as PrefixTypes;
  }

  getLevel(string: string): number {
    return parseInt(string);
  }

  getGuild(type: number, guild: number): string {
    return GUN_TABLE[type-1][guild-1]
  }

  getRarity(number: number[]): string {
    const tableNumber = GUN_RARTIY_TABLE[number[0]-1][number[1]-1];
    console.log(`You rolled a ${tableNumber}`)
    return GUN_RARITIES[tableNumber-1];
  }

  getElement(number: number):string {
    const elementRollRanges = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 92, 94, 96, 98, 100];
    for (let i = 0; i < elementRollRanges.length - 1; i ++) {
      if (number > elementRollRanges[i] && this.gunElementRoll <= elementRollRanges[i+1]) {
        return ELEMENTAL_TABLE[this.gunRarity][i]
      }

      if (number > 100) {
        return ELEMENTAL_TABLE[this.gunRarity][elementRollRanges.length-1];
      }
    }
    return "N/A"
  }

  onSubmit() {
    const { type, guild } = this.gunForm.value;

    if (this.gunTypeRoll === 7 && this.gunGuildRoll === 8) {
      this.gunType = "Rocket Launcher";
    } else {
      this.gunType = type as GunTypes;
    }
    this.gunGuild = guild as GuildTypes;

    if (!!this.gunGuild && GUILD_BONUSES[this.gunGuild].elemental != 0 && this.getRarity(this.gunRarityRoll).includes('(Element Roll)') || this.gunGuild === "Malefactor") {
      this.gunElement = this.getElement(this.gunElementRoll);
    } else { 
      this.gunElement = 'N/A'
    }

    console.log(`You chose a ${this.gunGuild} ${this.gunType}`);
  }
  
  ngOnInit(): void {
    this.generateNewGun();    
  }

  convertRarityToRarityType(rarity:string):RarityTypes {
    switch(rarity) {
      case 'Common': 
        return "common";
      case 'Common (Elemental Roll)': 
        return "common";
      case 'Uncommon': 
        return "uncommon";
      case 'Uncommon (Elemental Roll)': 
        return "uncommon";
      case 'Rare': 
        return "rare";
      case 'Rare (Element Roll)': 
        return "rare";
      case 'Epic': 
        return "epic";
      case 'Epic (Element Roll)': 
        return "epic";
      case 'Legendary': 
        return "legendary";
      case 'Legendary (Element Roll)': 
        return "legendary";
      default:
        return "common";
    }
  }
}
