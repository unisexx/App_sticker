import { CivilService } from './../services/civil.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-civil',
    templateUrl: './civil.page.html',
    styleUrls: ['./civil.page.scss'],
})
export class CivilPage implements OnInit{

    civils = [];

    // civilService ประกาศการใช้งานของ CivilService (ไฟล์ services/civil.service)
    // หลังจากที่ประกาศใช้งาน service แล้ว จึงจะสามารถใช้ฟังก์ชั่น getUser ที่อยู่ใน civil.service.ts ได้
    constructor(private navCtrl: NavController, private civilService: CivilService){
        this.init();
    }

    async init(){
        let resultArray = await this.civilService.getUsers();
        this.civils = resultArray;
    }

    ngOnInit(): void {
        
    }

    // civil เป็นข้อมูลที่ส่งมาจากหน้า html ตอนคลิก
    viewCivilDetail(civil){
        // console.log('civil',civil);
        this.navCtrl.navigateForward('/civil-detail/' + civil.login.uuid);
    }

}
