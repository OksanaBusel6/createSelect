import './scss/_reset.scss';
import './scss/style.scss';
import { BuildSelect } from './lib/BuildSelect';

document.addEventListener('DOMContentLoaded', () => {
  new BuildSelect('mySelect');
});


