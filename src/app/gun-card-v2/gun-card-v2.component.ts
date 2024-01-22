import { Component, Input } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { GUILD_BONUSES, GUN_TYPE_STATS, PREFIXES, RED_PREFIXES } from '../tables';
import { RedPrefixTypes, PrefixTypes } from '../types';

import { GunCard } from '../types';

@Component({
  selector: 'bnb-gun-card-v2',
  standalone: true,
  imports: [CommonModule, KeyValuePipe],
  templateUrl: './gun-card-v2.component.html',
  styleUrl: './gun-card-v2.component.scss'
})
export class GunCardV2Component {
  @Input() gun!: GunCard;

  get tier() {
    return this.gun.level < 7 ? 0
    : this.gun.level >= 7 && this.gun.level < 13 ? 1 
    : this.gun.level >= 13 && this.gun.level < 19 ? 2
    : this.gun.level >= 19 && this.gun.level < 25 ? 3
    : 4
  }

  get accuracy() {
    if (!this.gun.type) { return }
    return GUN_TYPE_STATS[this.gun.type]["tier"][this.tier].accuracy;
  }
  
  get damage() {
    if (!this.gun.type) { return }
    return GUN_TYPE_STATS[this.gun.type]["tier"][this.tier].damage;
  }

  get range() {
    if (!this.gun.type) { return }
    return GUN_TYPE_STATS[this.gun.type]["tier"][this.tier].range;
  }

  get guildBonus() {
    if (!this.gun.guild) { return }
    return GUILD_BONUSES[this.gun.guild][this.gun.rarity];
  }

  get weaponBonus() {
    if (!this.gun.type) { return }
    return GUN_TYPE_STATS[this.gun.type].bonus;
  }

  get prefixDescription() {
    if (this.gun.rarity !== 'Legendary') {
      this.gun.prefix = this.gun.prefix as PrefixTypes;
      if (!this.gun.prefix) { return }
      return PREFIXES[this.gun.prefix]
    } else {
      this.gun.prefix = this.gun.prefix as RedPrefixTypes;
      if (!this.gun.prefix) { return }
      return RED_PREFIXES[this.gun.prefix]
    }
  }

  convertElement(element: string) {
    switch(element) {
      case "Incendiary (+1d6)": 
        return "Incendiary";
      case "Incendiary (+2d6)": 
        return "Incendiary";
      case "Shock (+1d6)": 
        return "Shock";
      case "Shock (+2d6)": 
        return "Shock";
      case "Corrosive (+1d6)": 
        return "Corrosive";
      case "Corrosive (+2d6)": 
        return "Corrosive";
      case "Cryo (+1d6)": 
        return "Cryo";
      case "Cryo (+2d6)": 
        return "Cryo";
      case "Radiation (+1d6)": 
        return "Radiation";
      case "Radiation (+2d6)": 
        return "Radiation";
      case "Explosive (+1d6)": 
        return "Explosive";
      case "Explosive (+2d6)": 
        return "Explosive";
      case "Shock + Corrosive":
        return "Voltcidic";
      case "Radiation + Incendiary":
        return "Schoradiation";
      case "Explosive + Cryo":
        return "Icesplosion";
      case "N/A":
        return '';
      default:
        return element;
    }
  }

  keepOrder(a:any, b:any) {
    return a;    
  }
}
