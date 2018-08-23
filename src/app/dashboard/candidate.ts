export class Candidate {
  id: number;
  name: string;
  position: string;
  experience:number;
  date:Date;
  stage:string;
  complete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
