import { Moment } from "moment";

export default interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  type: "story";
  time: Moment;
  title: string;
  url: string;
}
