import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GUN_GUILDS, GUN_TABLE } from './tables';

export const gunTypes = [
  "Pistol",
  "Submachine Gun",
  "Shotgun",
  "Combat Rifle",
  "Sniper Rifle",
  "Rocket Launcher",
  "You rolled a 7",
  "Favored Gun"
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bunkers-and-Badasses-Angular';

  gunForm = new FormGroup({
    type: new FormControl('Pistol'),
    guild: new FormControl('Alas!')
  })

  gunTypeRoll!: number;
  gunGuildRoll!: number;

  youRolledASeven = false;

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

  private _Roll(dieType: number) {
    return Math.ceil(Math.random() * dieType);
  }

  generateNewGun() {
    //Reset 
    this.gunForm = new FormGroup({
      type: new FormControl('Pistol'),
      guild: new FormControl('Alas!')
    })

    //New Gun
    this.gunTypeRoll = this._Roll(8);
    this.gunType = this.getType(this.gunTypeRoll);
    console.log('Rolling Gun Type', this.gunTypeRoll, this.gunTypeRoll === 8 ? 'Choice' : this.gunType);

    if (this.gunTypeRoll < 7) {
      
      this.gunGuildRoll = this._Roll(8);
      this.gunGuild = this.getGuild(this.gunTypeRoll, this.gunGuildRoll);

      console.log('Rolling Gun Guild', this.gunGuildRoll, this.gunGuild);

    } else if (this.gunTypeRoll === 7) {

      this.gunGuildRoll = this._Roll(8);
      if (this.gunGuildRoll === 8) {
        this.gunType = this.gunGuild = '';
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

  }

  getType(type: number) {
    return gunTypes[type-1];
  }

  getGuild(type: number, guild: number): string {
    return GUN_TABLE[type-1][guild-1]
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
}
