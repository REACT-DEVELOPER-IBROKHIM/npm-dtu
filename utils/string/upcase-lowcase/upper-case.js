import { changeLetter } from './change-letter.js';

String.prototype.up = function up (param){
  return changeLetter(this, "up", param)
}