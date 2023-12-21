import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GUN_GUILDS, GUN_RARITIES, GUN_RARTIY_TABLE, GUN_TABLE } from './tables';
import { GunCardComponent } from './gun-card/gun-card.component';

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

  private _gunRarity!: string;
  get gunRarity() {
    return this._gunRarity;
  }
  set gunRarity(rarity: string) {
    this._gunRarity = rarity;
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
    if (this.gunTypeRoll < 7) {
      
      this.gunGuildRoll = this._Roll(8);
      this.gunGuild = this.getGuild(this.gunTypeRoll, this.gunGuildRoll) as GuildTypes;
      this.gunType = gunTypeResults[this.gunTypeRoll-1] as GunTypes;

      console.log('Rolling Gun Guild', this.gunGuildRoll, this.gunGuild);

    } else if (this.gunTypeRoll === 7) {

      this.gunGuildRoll = this._Roll(8);
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
    this.gunRarityRoll = [this._Roll(4), this._Roll(6)]
    this.gunRarity = this.getRarity(this.gunRarityRoll);
    console.log('Rolling Gun Rarity', this.gunRarityRoll, this.gunRarity);
  }

  getLevel(string: string): number {
    return parseInt(string);
  }

  getType(type: number) {
    return gunTypeResults[type-1];
  }

  getGuild(type: number, guild: number): string {
    return GUN_TABLE[type-1][guild-1]
  }

  getRarity(number: number[]): string {
    const tableNumber = GUN_RARTIY_TABLE[number[0]-1][number[1]-1];
    console.log(`You rolled a ${tableNumber}`)
    return GUN_RARITIES[tableNumber-1];
  }

  onSubmit() {
    const { type, guild } = this.gunForm.value;

    if (this.gunTypeRoll === 7 && this.gunGuildRoll === 8) {
      this.gunType = "Rocket Launcher";
    } else {
      this.gunType = type as GunTypes;
    }
    this.gunGuild = guild as GuildTypes;

    console.log(`You chose a ${this.gunGuild} ${this.gunType}`);
  }
  
  ngOnInit(): void {
    this.generateNewGun();    
  }
}
