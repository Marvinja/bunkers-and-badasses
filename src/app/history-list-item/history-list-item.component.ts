import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GunCard } from '../types';

@Component({
  selector: 'bnb-history-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-list-item.component.html',
  styleUrl: './history-list-item.component.scss'
})
export class HistoryListItemComponent {
  @Input() gun!: GunCard;

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
}
