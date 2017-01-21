import {Component, OnInit} from '@angular/core';
import {AstronautsService, IAstronaut} from './astronauts.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-astronauts',
  styleUrls: ['./astronauts.component.css'],
  templateUrl: './astronauts.component.html'
})

export class AstronautsComponent implements OnInit {
  astronauts: Astronaut[];
  newAstronaut: boolean;
  astronaut: Astronaut;
  displayDialog: boolean;
  selectedAstronaut: Astronaut;

  constructor(private astronautsService: AstronautsService, private notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
    this.astronautsService.getAstronauts().subscribe(
      (astronauts: Astronaut[]) => this.astronauts = astronauts,
      (error: any) => this.notificationsService.error('ERROR', error)
    );
  }

  public options = {
    position: ["top", "right"],
    timeOut: 5000,
  };

  showDialogToAdd(): void {
    this.newAstronaut = true;
    this.astronaut = new Astronaut('', '', '', '');
    this.displayDialog = true;
  }

  save(): void {
    for (let prop in this.astronaut) {
      if (this.astronaut[prop].length <= 0) {
        this.notificationsService.alert('Nevalidní data pro uložení!', '');
        return;
      }
    }

    if (this.newAstronaut) {
      this.astronautsService.createAstronaut(this.astronaut).subscribe(
        (astronaut: Astronaut) => {
          this.astronauts.push(astronaut);
          this.astronaut = null;
          this.displayDialog = false;
          this.notificationsService.success('Kosmonaut byl úspěšně přidán.', '');
        },
        (error: any) => this.notificationsService.error('ERROR', error)
      );
    } else {
      this.astronautsService.updateAstronaut(this.astronaut).subscribe(
        () => {
          this.astronauts[this.findSelectedAstronautIndex()] = this.astronaut;
          this.astronaut = null;
          this.displayDialog = false;
          this.notificationsService.success('Kosmonaut byl úspěšně upraven.', '');
        },
        (error: any) => this.notificationsService.error('ERROR', error)
      );
    }
  }

  delete(): void {
    if (this.newAstronaut) {
      this.displayDialog = false;
    } else {
      this.astronautsService.deleteAstronaut(this.astronaut).subscribe(
        () => {
          this.astronauts.splice(this.findSelectedAstronautIndex(), 1);
          this.displayDialog = false;
          this.notificationsService.success('Kosmonaut byl úspěšně smazán.', '');
        },
        (error: any) => this.notificationsService.error('ERROR', error)
      );
    }
  }

  onRowSelect(event): void {
    this.newAstronaut = false;
    // FUCKING FIX THIS SHIT - http://forum.primefaces.org/viewtopic.php?f=35&t=48264
    event.data.birthDate = new Date(event.data.birthDate);
    this.astronaut = Object.assign({}, event.data);
    this.displayDialog = true;
  }

  findSelectedAstronautIndex(): number {
    return this.astronauts.indexOf(this.selectedAstronaut);
  }
}

class Astronaut implements IAstronaut {
  constructor(public firstName: string,
              public lastName: string,
              public birthDate: string,
              public superPower: string) {
  }
}
