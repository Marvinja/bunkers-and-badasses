import { CommonModule, KeyValuePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GUILD_BONUSES, GUN_TYPE_STATS, PREFIXES } from '../tables';
import { GunTypes, GuildTypes, RarityTypes } from '../types';
import { ElementTypes, PrefixTypes } from '../types';

@Component({
  selector: 'app-gun-card',
  standalone: true,
  imports: [CommonModule, KeyValuePipe],
  templateUrl: './gun-card.component.html',
  styleUrl: './gun-card.component.scss',
})
export class GunCardComponent {
  @Input() level!: number;
  @Input() type!: GunTypes;
  @Input() guild!: GuildTypes;
  @Input() rarity!: RarityTypes;
  @Input() element!: ElementTypes;
  @Input() prefix!: PrefixTypes;

  prefixDesc!: string;

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
    return GUILD_BONUSES[this.guild][this.rarity];
  }

  get weaponBonus() {
    if (!this.type) { return }
    return GUN_TYPE_STATS[this.type].bonus;
  }

  get prefixDescription() {
    return PREFIXES[this.prefix];
  }

  keepOrder(a:any, b:any) {
    return a;
  }
}
