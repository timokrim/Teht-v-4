import { DigitransitService } from './../services/digitransit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  constructor(private digitransitService: DigitransitService) { }

  private pysakit: any = [];

  ngOnInit() {
    this.digitransitService.getRoutes('E1013')
      .subscribe(
          (res) => {
              console.log(res.data.stops[0].patterns);
              this.pysakit = res.data.stops[0].patterns;
  });
}
}