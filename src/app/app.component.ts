import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ELEMENTAL_TABLE, GUILD_BONUSES, GUN_RARITIES, GUN_RARTIY_TABLE, GUN_TABLE, PREFIXES, RED_PREFIXES } from './tables';
import { GunCardComponent } from './gun-card/gun-card.component';
import { ElementTypes, GuildTypes, GunTypes, PrefixTypes, RarityTypes, RedPrefixTypes } from './types';

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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, GunCardComponent, TitleCasePipe],
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

  private _gunElement!: ElementTypes;
  get gunElement() {
    return this._gunElement;
  }
  set gunElement(element: ElementTypes) {
    this._gunElement = element;
  }

  private _gunPrefix!: PrefixTypes | RedPrefixTypes;
  get gunPrefix() {
    return this._gunPrefix;
  }
  set gunPrefix(prefix: PrefixTypes | RedPrefixTypes) {
    this._gunPrefix = prefix;
  }

  private _Roll(dieType: number) {
    return Math.ceil(Math.random() * dieType);
  }

  constructor(private router: Router, private _cdf: ChangeDetectorRef) {}

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
    this.gunRarity = this.convertToRarityType(gunRarityResult);
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
      this.gunElement = this.getElement(this.gunElementRoll) as ElementTypes;
    } else { 
      this.gunElement = 'N/A'
    }
    
    //Step 7 - Prefixes
    const hasPrefixRoll = this._Roll(100);
    this.getPrefix(hasPrefixRoll);
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

  getPrefix(number: number) {
    this.gunPrefixRoll = this._Roll(Object.keys(PREFIXES).length);
    if ((this.gunRarity === 'rare' && number > 75) || (this.gunRarity === 'epic' && number > 50) || (number > 95)) {
      this.gunPrefix = Object.keys(PREFIXES)[this.gunPrefixRoll] as PrefixTypes;
    } else if (this.gunRarity === 'legendary') {
      this.gunPrefix = Object.keys(RED_PREFIXES)[this.gunPrefixRoll] as RedPrefixTypes;
    } else {
      this.gunPrefix = undefined;
    }
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
      this.gunElement = this.getElement(this.gunElementRoll) as ElementTypes;
    } else { 
      this.gunElement = 'N/A'
    }

    console.log(`You chose a ${this.gunGuild} ${this.gunType}`);
  }

  nfc!: string;

  async readTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      let gunData;
      try {
        await ndef.scan();
        document.getElementById('log')!.innerHTML = '';
        ndef.onreading = (event:any) => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            this.nfc = `${record.recordType} ${record.mediaType} ${decoder.decode(record.data)}`;
            this.consoleLog("Record type:\n" + record.recordType);
            this.consoleLog("MIME type:\n" + record.mediaType);
            this.consoleLog("data:\n" + decoder.decode(record.data));
            gunData = decoder.decode(record.data).split(',');
            if (!!gunData) {
              this.gunType = gunData[0] as GunTypes;
              this.gunGuild = gunData[1] as GuildTypes;
              this.gunRarity = gunData[2] as RarityTypes;
              this.gunElement = gunData[3] as ElementTypes;
              this.gunPrefix = gunData[4] as PrefixTypes | RedPrefixTypes;
              this._cdf.markForCheck();
            }
          }
        }
      } catch(error) {
        this.consoleLog(error);
      }
    } else {
      this.consoleLog("NDEFReader" in window);
      this.consoleLog("Web NFC is not supported.");
    }
  }

  async writeTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.write({ records: [
          { recordType: 'text', data: `${this.gunType},${this.gunGuild},${this.gunRarity},${this.gunElement},${this.gunPrefix}` as string },
        ]});
        this.consoleLog(`${this.gunRarity} ${this.gunElement !== 'N/A' ? this.gunElement: ''} ${!!this.gunPrefix} ${this.gunGuild} ${this.gunType}`);
      } catch(error) {
        this.consoleLog(error);
      }
    } else {
      this.consoleLog("Web NFC is not supported.");
    }
  }

  consoleLog(data:any) {
    let logElement = document.getElementById('log');
    logElement!.innerHTML = data + "\n";
  }
  
  
  ngOnInit(): void {
    this.generateNewGun();    
  }

  convertToRarityType(rarity:string):RarityTypes {
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
