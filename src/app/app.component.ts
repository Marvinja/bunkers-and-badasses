import { ChangeDetectorRef, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GUN_TYPE_RESULTS, ELEMENTAL_TABLE, GUILD_BONUSES, GUN_RARITIES, GUN_RARTIY_TABLE, GUN_TABLE, PREFIXES, RED_PREFIXES } from './tables';
import { GunCardComponent } from './gun-card/gun-card.component';
import { ElementTypes, GuildTypes, GunCard, GunTypes, PrefixTypes, RarityTypes, RedPrefixTypes } from './types';
import { HistoryListComponent } from './history-list/history-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, GunCardComponent, TitleCasePipe, HistoryListComponent],
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

  nfc!: string;
  ndef!: NDEFReader;
  controller!: AbortController;
  dialogState!: 'read' | 'write';
  hasScannedItem: boolean = false;

  currentGun!: GunCard;
  stagingGun!: GunCard;
  gunList: GunCard[] = [];


  get hasNDEFReader():boolean {
    return "NDEFReader" in window;
  }

  @ViewChild('level') level!: ElementRef<HTMLInputElement>;
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('log') log!: ElementRef<HTMLElement>;
  @ViewChild('loadedGun') loadedGun!: ElementRef<HTMLElement>;
  
  private _Roll(dieType: number) {
    return Math.ceil(Math.random() * dieType);
  }

  constructor(private router: Router, private _cdf: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.currentGun = {
      level: 1,
      type: "Pistol",
      guild: "Alas!",
      rarity: "Common",
      element: "N/A",
      prefix: undefined,
    }
    this.generateNewGun();    
  }

  generateNewGun() {
    //Reset 
    this.gunForm = new FormGroup({
      type: new FormControl('Pistol'),
      guild: new FormControl('Alas!')
    })

    //New Gun
    this.currentGun.level = parseInt(this.level?.nativeElement.value) || 1;

    //Step 1 - Rolling Gun Type
    this.gunTypeRoll = this._Roll(8);
    let gunTypeResult = GUN_TYPE_RESULTS[this.gunTypeRoll-1];
    console.group("Generated Gun");
    console.log('Rolling Gun Type...');
    console.log(`%cYou rolled a ${this.gunTypeRoll}: ${this.gunTypeRoll === 8 ? 'Choice' : gunTypeResult}`, "color: yellow");

    //Step 2 - Rolling Gun Guild
    console.log('Rolling Gun Guild...');
    this.gunGuildRoll = this._Roll(8);
    if (this.gunTypeRoll < 7) {
      this.currentGun.guild = this.getGuild(this.gunTypeRoll, this.gunGuildRoll) as GuildTypes,
      this.currentGun.type = GUN_TYPE_RESULTS[this.gunTypeRoll-1] as GunTypes,
      console.log(`%cYou rolled a ${this.gunGuildRoll}: ${this.currentGun.guild}`, "color: yellow");
    } else if (this.gunTypeRoll === 7) {
      if (this.gunGuildRoll === 8) {
        this.currentGun.guild = undefined;
        this.gunForm = new FormGroup({
          type: new FormControl({value: 'Rocket Launcher', disabled: true}),
          guild: new FormControl('Alas!')
        })
      } else {
        this.gunTypeRoll = [1, 3, 1, 2, 3, 4, 5, 6][this.gunGuildRoll-1];
        this.currentGun.guild = this.getGuild(this.gunTypeRoll, this.gunGuildRoll) as GuildTypes;
        this.currentGun.type = GUN_TYPE_RESULTS[this.gunTypeRoll-1] as GunTypes;
      }
    } else {
      this.currentGun.type = this.currentGun.guild = undefined;
    }

    //Step 3 - Rolling Gun Rarity
    console.log('Rolling Gun Rarity...');

    this.gunRarityRoll = [this._Roll(4), this._Roll(6)];
    let gunRarityResult = this.getRarity(this.gunRarityRoll);
    this.currentGun.rarity = this.convertToRarityType(gunRarityResult)

    console.log(`%cYou rolled a ${this.gunRarityRoll[0]}|${this.gunRarityRoll[1]}: ${gunRarityResult}`, "color: yellow");

    //Step 6 - Element
    if (!!this.currentGun.guild && GUILD_BONUSES[this.currentGun.guild!].elemental != 0 && gunRarityResult.includes('(Element Roll)') || this.currentGun.guild === "Malefactor") {
      console.log('Rolling Gun Element...');
      this.gunElementRoll = this._Roll(100);
      if (this.currentGun.guild === "Malefactor") {
        this.currentGun.element = this.setMaliwanElement();
        console.log(`%cThe Gun's Element is ${this.currentGun.element}`, "color: yellow");
      } else {
        this.currentGun.element = this.getElement(this.gunElementRoll);
      }
    } else {
      this.currentGun.element = "N/A" 
    }
    
    //Step 7 - Prefixes
    console.log("Rolling prefix...");
    const hasPrefixRoll = this._Roll(100);
    this.getPrefix(hasPrefixRoll);

    //Add to list of guns generated
    if (this.gunTypeRoll < 7) {
      this.gunList.push({...this.currentGun});
    }

    console.log(`Current Gun:`, this.currentGun)
    console.groupEnd();
  }
  

  consoleLog(data:any) {
    this.log!.nativeElement.innerHTML += data + "<br/> <br/>";
  }

  clearLog() {
    this.log!.nativeElement.innerHTML = '';
  }

  closeDialog() {
    if ("NDEFReader" in window) {
      this.hasScannedItem = false;
      this.loadedGun.nativeElement.innerHTML = '';
      this.controller.abort();
    }
    this.dialog.nativeElement.close();
  }

  getLevel(string: string): number {
    return parseInt(string);
  }

  getGuild(type: number, guild: number): string {
    return GUN_TABLE[type-1][guild-1]
  }

  getRarity(number: number[]): string {
    return GUN_RARITIES[GUN_RARTIY_TABLE[number[0]-1][number[1]-1]-1];
  }

  getElement(number: number): ElementTypes {
    const elementRollRanges = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 92, 94, 96, 98, 100];

    for (let i = 0; i < elementRollRanges.length - 1; i ++) {
      if (number > 100) {
        const element = ELEMENTAL_TABLE[this.convertToRarityType(this.currentGun.rarity)][ELEMENTAL_TABLE[this.convertToRarityType(this.currentGun.rarity)].length - 1]
        console.log(`%cThe Gun's Element is ${element}`, "color: yellow")
        return element as ElementTypes;
      }

      if (number > elementRollRanges[i] && this.gunElementRoll <= elementRollRanges[i+1]) {
        let element = ELEMENTAL_TABLE[this.convertToRarityType(this.currentGun.rarity)][i]
        console.log(`%cThe Gun's Element is ${element}`, "color: yellow")
        return element as ElementTypes;
      }      
    }
    console.log(`%cThe gun is not elemental`, "color: yellow")
    return "N/A"
  }

  setMaliwanElement(): ElementTypes {
    const elementRollRanges = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 92, 94, 96, 98, 100];
    let roll = this._Roll(100);
    let element: ElementTypes = "N/A";

    switch(this.currentGun.rarity) {
      case 'Rare':
        roll += 10;
        break;
      case 'Epic': 
        roll += 15;
        break;
      case 'Legendary': 
        roll += 20;
        break;
    }

    if (roll > 100) {
      return ELEMENTAL_TABLE[this.currentGun.rarity][ELEMENTAL_TABLE[this.currentGun.rarity].length-1] as ElementTypes;
    }

    for (let i = 0; i < elementRollRanges.length - 1; i ++) {
      if (roll > elementRollRanges[i] && roll <= elementRollRanges[i+1]) {
        element = ELEMENTAL_TABLE[this.currentGun.rarity][i] as ElementTypes;
      }
    }

    if (element !== "N/A") {
      return element;
    } else {
      return this.setMaliwanElement();
    }
  }

  getPrefix(number: number) {
    this.gunPrefixRoll = this._Roll(Object.keys(PREFIXES).length);
    if (this.currentGun.rarity === 'Legendary') {
      this.gunPrefixRoll = this._Roll(Object.keys(RED_PREFIXES).length);
      this.currentGun.prefix = Object.keys(RED_PREFIXES)[this.gunPrefixRoll] as RedPrefixTypes;
    } else if ((this.currentGun.rarity === 'Rare' && number > 75) || (this.currentGun.rarity === 'Epic' && number > 50) || (number > 95)) {
      this.currentGun.prefix = Object.keys(PREFIXES)[this.gunPrefixRoll] as PrefixTypes;
    } else {
      this.currentGun.prefix = undefined;
    }
    console.log(`%cYou rolled a ${number}: ${this.currentGun.prefix === undefined ? `Not qualified` : this.currentGun.prefix}`, "color: yellow");
  }

  onSubmit() {
    const { type, guild } = this.gunForm.value;

    //Set Type and Guild
    if (this.gunTypeRoll === 7 && this.gunGuildRoll === 8) {
      this.currentGun.type = "Rocket Launcher";
    } else {
      this.currentGun.type = type as GunTypes;
    }
    this.currentGun.guild = guild as GuildTypes;

    console.log(`%cYou chose a ${this.currentGun.guild} ${this.currentGun.type}`, "color: yellow");

    //Run elemental code once guild has been set
    if (!!this.currentGun.guild && GUILD_BONUSES[this.currentGun.guild].elemental != 0 && this.getRarity(this.gunRarityRoll).includes('(Element Roll)') || this.currentGun.guild === "Malefactor") {
      console.log('Rolling Gun Element...');
      this.gunElementRoll = this._Roll(100);
      if (this.currentGun.guild === "Malefactor") {
        this.currentGun.element = this.setMaliwanElement() as ElementTypes;
      } else {
        this.currentGun.element = this.getElement(this.gunElementRoll);
      }
      console.log(`%cThe Gun's Element is ${this.currentGun.element}`, "color: yellow")
    } else {
      console.log(`%cThe gun is not elemental`, "color: yellow")
      this.currentGun.element = 'N/A'
    }

    if (this.currentGun.element === "N/A" && this.currentGun.guild === "Malefactor") {
      while(this.currentGun.element === "N/A") {
        this.currentGun.element = this.getElement(this._Roll(100)) as ElementTypes;
      }
    }
    
    this.gunList.push({...this.currentGun})
  }

  onSave() {
    this.hasScannedItem = false;
    if ("NDEFReader" in window) {
      this.hasScannedItem = false;
      this.loadedGun.nativeElement.innerHTML = '';
      this.controller.abort();
    }
    this.currentGun = this.stagingGun;
    this.stagingGun = {} as GunCard;
    this.gunList.push({...this.currentGun});
    this.dialog.nativeElement.close();
    this._cdf.detectChanges();
  }

  loadGun(event: GunCard) {
    this.currentGun = {...event};
  }

  convertToRarityType(rarity:string):RarityTypes {
    switch(rarity) {
      case 'Common (Element Roll)': 
        return "Common";
      case 'Uncommon (Element Roll)': 
        return "Uncommon";
      case 'Rare (Element Roll)': 
        return "Rare";
      case 'Epic (Element Roll)': 
        return "Epic";
      case 'Legendary (Element Roll)': 
        return "Legendary";
      default:
        return rarity as RarityTypes;
    }
  }

  async readTag() {
    this.dialogState = 'read';
    this.dialog.nativeElement.showModal();
    this.loadedGun.nativeElement.innerHTML = '';
    if ("NDEFReader" in window) {
      this.ndef = new NDEFReader();
      this.controller = new AbortController();
      const signal = this.controller.signal;
      try {
        await this.ndef.scan({signal});
        this.ndef.onreading = (event: NDEFReadingEvent) => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            // this.consoleLog("Record type: " + record.recordType);
            // this.consoleLog("MIME type: " + record.mediaType);
            this.consoleLog("Data: " + decoder.decode(record.data));
            let gunData = decoder.decode(record.data).split('|');
            this.level.nativeElement.value = gunData[0];
            this.stagingGun = {
              level: parseInt(gunData[0]),
              type: gunData[1] as GunTypes,
              guild: gunData[2] as GuildTypes,
              rarity: gunData[3] as RarityTypes,
              element: gunData[4] as ElementTypes,
              prefix: gunData[5] === 'undefined' ? undefined : gunData[5] as PrefixTypes | RedPrefixTypes,
            }
            this.consoleLog(`Gun loaded: ${this.stagingGun.level} ${this.stagingGun.type} ${this.stagingGun.guild} ${this.stagingGun.rarity} ${this.stagingGun.element} ${this.stagingGun.prefix}`);
          }
          this.hasScannedItem = true;
          this.loadedGun.nativeElement.innerHTML = `Gun loaded: Level ${this.stagingGun.level} ${this.stagingGun.type} ${this.stagingGun.guild} ${this.stagingGun.rarity} ${this.stagingGun.element} ${this.stagingGun.prefix}`;
          this._cdf.detectChanges();
        }
      } catch (error: any) {
        this.consoleLog('Error: ' + error);
      }
    } else {
      this.consoleLog("Web NFC is not supported.");
    }
  }

  async writeTag() {
    this.dialogState = 'write';
    this.dialog.nativeElement.showModal();
    this.loadedGun.nativeElement.innerHTML = "";
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      this.controller = new AbortController();
      const signal = this.controller.signal;
      try {
        await ndef.write({ records: [
          { recordType: 'text', data: `${this.currentGun.level}|${this.currentGun.type}|${this.currentGun.guild}|${this.currentGun.rarity}|${this.currentGun.element}|${this.currentGun.prefix}` as string },
        ]}, { signal }).then(() => {
          this.loadedGun.nativeElement.innerHTML = `Saved gun successfully!: Level ${this.currentGun.level} ${this.currentGun.rarity} ${this.currentGun.element !== 'N/A' ? this.currentGun.element: ''} ${this.currentGun.prefix} ${this.currentGun.guild} ${this.currentGun.type}`
        });
        this.consoleLog(`Level ${this.currentGun.level} ${this.currentGun.rarity} ${this.currentGun.element !== 'N/A' ? this.currentGun.element: ''} ${this.currentGun.prefix !== undefined ? this.currentGun.prefix : ''} ${this.currentGun.guild} ${this.currentGun.type}`);
      } catch(error) {
        this.consoleLog(error);
      }
    } else {
      this.consoleLog("Web NFC is not supported.");
    }
  }
}
