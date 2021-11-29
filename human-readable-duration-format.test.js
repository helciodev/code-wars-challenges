const formatDuration = require('./human-readable-duration-format');

test('formatDuration(7262) to return 2 hours, 1 minute and 2 seconds', () => {
  expect(formatDuration(7262)).toBe('2 hours, 1 minute and 2 seconds');
});

test('formatDuration(3600 to return 1 hour', () => {
  expect(formatDuration(3600)).toEqual('1 hour');
});

test('formatDuration(3662), to return 1 hour, 1 minute and 2 seconds', () => {
  expect(formatDuration(3662)).toEqual('1 hour, 1 minute and 2 seconds');
});

test('formatDuration(62) to return, 1 minute and 2 seconds', () => {
  expect(formatDuration(62)).toBe('1 minute and 2 seconds');
});
test('formatDuration(120) to return, 2 minutes', () => {
  expect(formatDuration(120)).toBe('2 minutes');
});
