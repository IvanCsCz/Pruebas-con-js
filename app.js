import { template } from "./main";
import { getCoincidences } from "./src/logic/03-FindWord";

template;

console.log(
  getCoincidences(
    "Hey, this is a testing text where you can find 1, 2, 3, 3",
    "3"
  )
);
