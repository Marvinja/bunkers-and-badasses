import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ElementTypes, GuildTypes, GunCard, GunTypes, PrefixTypes, RarityTypes, RedPrefixTypes } from '../types';

export const gun_data: GunCard[] = [
  {
    level: 1,
    prefix: "Aback",
    rarity: "legendary",
    type: "Shotgun",
    guild: "Malefactor",
    element: "Shock + Corrosive",
  },
  {
    level: 1,
    prefix: "Aberrant",
    rarity: "rare",
    type: "Shotgun",
    guild: "Malefactor",
    element: "Explosive + Cryo",
  },
]

@Component({
  selector: 'bnb-history-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-list.component.html',
  styleUrl: './history-list.component.scss'
})
export class HistoryListComponent {
  @Input() data: GunCard[] = gun_data;

  convertElement(element: string) {
    switch(element) {
      case "Shock + Corrosive":
        return "Voltcidic";
      case "Radiation + Incendiary":
        return "Inferadiation";
      case "Explosive + Cryo":
        return "Icesplosion";
      case "N/A":
        return '';
      default:
        return element;
    }
  }
}
