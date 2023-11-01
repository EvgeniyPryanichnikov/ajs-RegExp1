import Validator from '../nickname';

test.each([
  'mari-123m', 'mari', 'MA', 'mari123M', 'mari_12mari', 'mari-1-mari', 'mari_m', 'mari123_m', 'mari123-m',
])(('should validate number'), (data) => {
  expect(Validator.validateUsername(data)).toBe(true);
});

test.each([
  'mari-1234', '1mari', '_MA', '-mari123', 'mari12345mari', '@mari1', 'mari!m', 'mari123_', 'mari123-', 'Марина',
])(('should not validate number'), (data) => {
  expect(() => Validator.validateUsername(data)).toThrow();
});
