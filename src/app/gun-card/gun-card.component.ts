import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GUILD_BONUSES, GUN_TYPE_STATS } from '../tables';
import { GunTypes, GuildTypes } from '../app.component';

export type RarityTypes = "common" | "uncommon" | "rare" | "epic" | "legendary";

@Component({
  selector: 'app-gun-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gun-card.component.html',
  styleUrl: './gun-card.component.scss',
})
export class GunCardComponent {
  @Input() level!: number;
  @Input() type!: GunTypes;
  @Input() guild!: GuildTypes;
  @Input() rarity!: string;
  @Input() element!: string;

  accuracyRanges = ['2-7', '8-15', '16+'];

  get tier() {
    return this.level < 7 ? 0
    : this.level >= 7 && this.level < 13 ? 1 
    : this.level >= 13 && this.level < 19 ? 2
    : this.level >= 19 && this.level < 25 ? 3
    : 4
  }

  get accuracy() {
    if (!this.type) { return }
    return GUN_TYPE_STATS[this.type]["tier"][this.tier].accuracy;
  }
  
  get damage() {
    if (!this.type) { return }
    return GUN_TYPE_STATS[this.type]["tier"][this.tier].damage;
  }

  get range() {
    if (!this.type) { return }
    return GUN_TYPE_STATS[this.type]["tier"][this.tier].range;
  }

  get guildBonus() {
    if (!this.guild) { return }
    return GUILD_BONUSES[this.guild][this.convertRarity];
  }

  get weaponBonus() {
    if (!this.type) { return }
    return GUN_TYPE_STATS[this.type].bonus;
  }

  get convertRarity(): RarityTypes {
    switch(this.rarity) {
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
      case 'Epic': return "epic";
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

  get convertGuild(): GuildTypes {
    switch(this.guild) {
      case "Alas!":
        return "Alas!";
      case "Skuldugger":
        return "Skuldugger";
      case "Dahlia":
        return "Dahlia";
      case "Blackpowder":
        return "Blackpowder";
      case "Malefactor":
        return "Malefactor";
      case "Hyperius":
        return "Hyperius";
      case "Feriore":
        return "Feriore";
      case "Torgue":
        return "Torgue";
      case "Stoker":
        return "Stoker";
      default:
        return "Alas!";
    }
  }
}
