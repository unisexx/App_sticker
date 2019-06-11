import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-civil',
    templateUrl: './civil.page.html',
    styleUrls: ['./civil.page.scss'],
})
export class CivilPage implements OnInit{

    civils = [];

    constructor(private http: HttpClient){
        
    }

    ngOnInit(): void {
        this.http.get("https://randomuser.me/api/?results=10")
                    .subscribe((data:any)=>{
                        console.log(data);
                        this.civils = data.results;
                    });
    }

}
