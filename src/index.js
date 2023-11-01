import './css/style.css';
import Validator from './js/nickname';
import transferPhoneNumberToTemplate from './js/phones';

// for the first task about nickname validation
Validator.validateUsername('mari-123_kor');
Validator.validateUsername('мари-123_kor');

// for the second task about destructuring
transferPhoneNumberToTemplate('+86-000-000-0000');
