import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GUN_GUILDS, GUN_RARITIES, GUN_RARTIY_TABLE, GUN_TABLE } from './tables';
import { GunCardComponent } from './gun-card/gun-card.component';

export const gunTypes = [
  "Pistol",
  "Submachine Gun",
  "Shotgun",
  "Combat Rifle",
  "Sniper Rifle",
  "Rocket Launcher",
  "You rolled a 7",
  "Favored Gun"
];

export type GunType = "Pistol" | "Submachine Gun" | "Shotgun" | "Combat Rifle" | "Sniper Rifle" | "Rocket Launcher";

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


  getLevel(string: string): number {
    return parseInt(string);
  }
  
  private _gunType!: string;
  get gunType() {
    return this._gunType;
  }
  set gunType(type: string) {
    this._gunType = type;
  }
  
  private _gunGuild!: string;
  get gunGuild() {
    return this._gunGuild;
  }
  set gunGuild(guild: string) {
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
    this.gunType = this.getType(this.gunTypeRoll);
    console.log('Rolling Gun Type', this.gunTypeRoll, this.gunTypeRoll === 8 ? 'Choice' : this.gunType);

    //Step 2 - Rolling Gun Guild
    if (this.gunTypeRoll < 7) {
      
      this.gunGuildRoll = this._Roll(8);
      this.gunGuild = this.getGuild(this.gunTypeRoll, this.gunGuildRoll);

      console.log('Rolling Gun Guild', this.gunGuildRoll, this.gunGuild);

    } else if (this.gunTypeRoll === 7) {

      this.gunGuildRoll = this._Roll(8);
      if (this.gunGuildRoll === 8) {
        this.gunType = this.gunGuild ='';
        this.gunForm = new FormGroup({
          type: new FormControl({value: 'Rocket Launcher', disabled: true}),
          guild: new FormControl('Alas!')
        })
      } else {
        this.gunGuild = this.getGuild(this.gunTypeRoll, this.gunGuildRoll);
        this.gunTypeRoll = [1, 3, 1, 2, 3, 4, 5, 6][this.gunGuildRoll-1];
        this.gunType = this.getType(this.gunTypeRoll);
      }
      console.log('You rolled a 7', this.gunType, this.gunTypeRoll, this.gunGuild, this.gunGuildRoll);
    } else {
      this.gunType = this.gunGuild = '';
    }

    //Step 3 - Rolling Gun Rarity
    this.gunRarityRoll = [this._Roll(4), this._Roll(6)]
    this.gunRarity = this.getRarity(this.gunRarityRoll);
    console.log('Rolling Gun Rarity', this.gunRarityRoll, this.gunRarity);
  }

  getType(type: number) {
    return gunTypes[type-1];
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
      this.gunType = typeof type == 'string' ? type : '';
    }
    this.gunGuild = typeof guild == 'string' ? guild : '';

    console.log(`You chose a ${this.gunGuild} ${this.gunType}`);
  }
  
  ngOnInit(): void {
    this.generateNewGun();    
  }
}
