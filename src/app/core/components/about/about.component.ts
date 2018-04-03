import { Component, OnInit, Inject, Optional } from '@angular/core';

import { ConstantsService, ConfigOptionsService, CONFIG, GENERATOR, GeneratorService } from '../../../core/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    public consts: ConstantsService,
    @Inject(CONFIG) public config: ConfigOptionsService,
    @Optional() @Inject(GENERATOR) public generator
  ) { }

  ngOnInit() {
  }

}
