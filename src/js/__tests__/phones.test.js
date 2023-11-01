import transferPhoneNumberToTemplate from '../phones';

test.each([
  ['8 (927) 000-00-00', '+89270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  [89270000000, '+89270000000'],
  ['+86*000*000*0000', '+860000000000'],
  ['+86-000-000-0000', '+860000000000'],
])(('should transfer phone numbers'), (data, expected) => {
  expect(transferPhoneNumberToTemplate(data)).toBe(expected);
});
