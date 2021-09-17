//app/routes/bands.js
import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking'; 

  class Band {
    @tracked name;

    constructor(name) {
      this.name = name;
    }
  }

export default class BandsRoute extends Route {
  model() { 
    return [
           { name: 'Led Zeppelin' },
           { name: 'Pearl Jam' },
           { name: 'Foo Fighters' },
    ];
  } 
}