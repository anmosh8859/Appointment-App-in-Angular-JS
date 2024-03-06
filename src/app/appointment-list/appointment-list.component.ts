import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  appointments: Appointment[] = []

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments")

    this.appointments = savedAppointments?JSON.parse(savedAppointments) : []
  }

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date()

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)
    }

    this.newAppointmentDate = new Date();
    this.newAppointmentTitle = "";
    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1)
    alert(this.appointments.length)
    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }
}
