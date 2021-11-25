import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModesService {

  AvailableModes = [
    "Static",
    "Blink",
    "Breath",
    "Color Wipe",
    "Color Wipe Inverse",
    "Color Wipe Reverse",
    "Color Wipe Reverse Inverse",
    "Color Wipe Random",
    "Random Color",
    "Single Dynamic",
    "Multi Dynamic",
    "Rainbow",
    "Rainbow Cycle",
    "Scan",
    "Dual Scan",
    "Fade",
    "Theater Chase",
    "Theater Chase Rainbow",
    "Running Lights",
    "Twinkle",
    "Twinkle Random",
    "Twinkle Fade",
    "Twinkle Fade Random",
    "Sparkle",
    "Flash Sparkle",
    "Hyper Sparkle",
    "Strobe",
    "Strobe Rainbow",
    "Multi Strobe",
    "Blink Rainbow",
    "Chase White",
    "Chase Color",
    "Chase Random",
    "Chase Rainbow",
    "Chase Flash",
    "Chase Flash Random",
    "Chase Rainbow White",
    "Chase Blackout",
    "Chase Blackout Rainbow",
    "Color Sweep Random",
    "Running Color",
    "Running Red Blue",
    "Running Random",
    "Larson Scanner",
    "Comet",
    "Fireworks",
    "Fireworks Random",
    "Merry Christmas",
    "Fire Flicker",
    "Fire Flicker (soft)",
    "Fire Flicker (intense)",
    "Circus Combustus",
    "Halloween",
    "Bicolor Chase",
    "Tricolor Chase"
  ]

  getModes(): string[] {
    return this.AvailableModes;
  }
}