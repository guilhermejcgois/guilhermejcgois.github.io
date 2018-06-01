// Inspired by zurb.us/1nc16HM

import { timer } from "rxjs";

const MILI = 1000;
const _10S = 10 * MILI;
const FIRST_TIME = 5 * MILI;
const SECOND_TIME = FIRST_TIME + _10S;

const eyes = document.getElementsByClassName('eyes')[0];
const rightArm = document.getElementsByClassName('right-arm')[0];

timer(FIRST_TIME).subscribe(() => {
  eyes.classList.add('animate');
  rightArm.classList.add('wave');
  timer(_10S).subscribe(() => {
    eyes.classList.remove('animate');
    rightArm.classList.remove('wave');
  });
});
