import { Component } from '@angular/core';

type Assignment = {
  productLine: string
  generalAgreements: string[]
}

@Component({
  selector: 'expansion-steps-example',
  templateUrl: 'expansion-steps-example.html',
  styleUrls: ['expansion-steps-example.scss'],
})
export class ExpansionStepsExample {
  items(n: number): any[] {
    const array = Array(n);

    for (let i = 0; i < n; i++) {
      array[i]=i+1;
    }

    return array;
  }
}