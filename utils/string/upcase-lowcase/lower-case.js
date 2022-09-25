import { changeLetter } from './change-letter.js';

String.prototype.low = function low (param){
  return changeLetter(this, "low", param)
}