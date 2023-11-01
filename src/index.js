import './css/style.css';
import Validator from './js/nickname';
import transferPhoneNumberToTemplate from './js/phones';

Validator.validateUsername('egpr-123_egp');
Validator.validateUsername('егпр-123_egp');

transferPhoneNumberToTemplate('+86-000-000-0000');
