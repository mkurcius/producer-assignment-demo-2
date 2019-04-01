import { Component } from '@angular/core';

type Assignment = {
  productLine: string
  generalAgreements: string[]
}

@Component({
  selector: 'expansion-steps-example',
  templateUrl: 'expansion-steps-example.html',
  styleUrls: ['expansion-steps-example.css'],
})
export class ExpansionStepsExample {
  assignments: Assignment[] = [
    {
      productLine: "Product line 1",
      generalAgreements: [
        "General Agreement 1.1",
        "General Agreement 1.2",
        "General Agreement 1.3",
        "General Agreement 1.4",
      ]
    },
    {
      productLine: "Product line 2",
      generalAgreements: [
        "General Agreement 2.1",
        "General Agreement 2.2",
        "General Agreement 2.3",
        "General Agreement 2.4",
      ]
    },
    {
      productLine: "Product line 3",
      generalAgreements: [
        "General Agreement 3.1",
        "General Agreement 3.2",
        "General Agreement 3.3",
        "General Agreement 3.4",
      ]
    },
    {
      productLine: "Product line 4",
      generalAgreements: [
        "General Agreement 4.1",
        "General Agreement 4.2",
        "General Agreement 4.3",
        "General Agreement 4.4"
      ]
    },
    {
      productLine: "Product line 5",
      generalAgreements: [
        "General Agreement 5.1",
        "General Agreement 5.2",
        "General Agreement 5.3",
        "General Agreement 5.4",
      ]
    },
  ]
}