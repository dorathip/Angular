import { Component, OnInit } from '@angular/core';
import { ClassFile } from './class-file';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {



  employeeData : ClassFile[]=[
    new ClassFile("A101","Jothi",16000,"Architect",7),
    new ClassFile("T102","Rani",10000,"Tester",5),
    new ClassFile("D103","Dora",8000,"Developer",6),
    new ClassFile("A104","Raja",15000,"Architect",7),
    new ClassFile("D105","Rena",9000,"Developer",6),
    new ClassFile("P106","Anna",10000,"Programmer",5)
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
