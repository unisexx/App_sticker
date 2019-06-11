import { CivilService } from './../services/civil.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-civil-detail',
    templateUrl: './civil-detail.page.html',
    styleUrls: ['./civil-detail.page.scss'],
})
export class CivilDetailPage implements OnInit {

    civil;

    // ActivatedRoute ใช้ดงข้อมูลพารามิเตอร์จาก url มาใช้งานต่อได้
    constructor(private route: ActivatedRoute, private civilService: CivilService) { }

    ngOnInit() {
        this.route.params.subscribe((params)=>{
            console.log(params);

            let civilData = this.civilService.findUser(params.uuid);
            console.log('civil',civilData);

            this.civil = civilData;
        });
    }

}
