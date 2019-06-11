import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CivilService {

    civils = [];

    constructor(private http: HttpClient) { }

    async getUsers(){
        let returnDataCivils = <any>await this.http.get("https://randomuser.me/api/?results=5").toPromise();
        console.log(returnDataCivils);

        this.civils = returnDataCivils.results;
        return this.civils;
    }

    // this.civils ใน findUser นี้ ได้มาจาก getUsers
    // find() ทำหน้าที่เอา uuid ที่ได้มาเทียบกับ array ของ uuid ของทุกคนใน getUsers แล้วดึงข้อมูลของคนที่เทียบได้ออกมาใช้งาน
    findUser(uuid: string){
        let civilResult = this.civils.find((user)=>{

            // เป็นค่า uuid ของ user แต่ละคนที่อยู่ใน array ของ getUsers
            let uuId = user.login.uuid;

            if(uuid == uuId){
                return true;
            }else{
                return false;
            }

        });

        return civilResult;
    }
}
