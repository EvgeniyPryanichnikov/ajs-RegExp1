import Validator from '../nickname';

test.each([
  'evgn-123m', 'jeka', 'EP', 'EgPr123M', 'Egrp_12mari', 'jhon-1-jhon', 'jack_p', 'evgn123_p', 'EePp123-p',
])(('should validate number'), (data) => {
  expect(Validator.validateUsername(data)).toBe(true);
});

test.each([
  'evgn-1234', '1evgn', '_EP', '-evgn123', 'jack12345jack', '@Evgen1', 'Ev!gen', 'Pryan123_', 'Prya123-', 'Евгений',
])(('should not validate number'), (data) => {
  expect(() => Validator.validateUsername(data)).toThrow();
});
