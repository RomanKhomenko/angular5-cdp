import { Component, OnInit, Inject, Optional } from '@angular/core';

import { ConstantsService, ConfigOptionsService, CONFIG, GENERATOR, GeneratorService } from '../../../core/services';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(
    public consts: ConstantsService,
    @Inject(CONFIG) public config: ConfigOptionsService,
    @Optional() @Inject(GENERATOR) public generator
  ) { }

  ngOnInit() {
  }

}
