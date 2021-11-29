// human - readable - duration - format;

function formatDuration(seconds) {
  let hour;
  let minutes;
  let second;
  let message;

  if (seconds >= 3600) {
    hour = Math.floor(seconds / 3600);
    minutes = seconds % 3600 > 60 ? Math.floor((seconds % 3600) / 60) : '';
    second = (seconds % 3600) % 60;

    if (!minutes && !second) {
      message = `${hour} ${hour > 1 ? 'hours' : 'hour'}`;
    } else {
      message = `${hour} ${hour > 1 ? 'hours' : 'hour'}, ${
        minutes
          ? minutes > 1
            ? minutes + ' minutes'
            : minutes + ' minute'
          : ''
      } and ${
        second ? (second > 1 ? second + ' seconds' : second + ' second') : ''
      }`;
    }

    message = message.replaceAll('  ', ' ');
  } else {
    if (seconds >= 60 && seconds % 60 === 0) {
      minutes = seconds / 60;
      message = `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`;
    } else {
      minutes = Math.floor(seconds / 60);
      second = seconds % 60;
      message = `${minutes} ${
        minutes > 1 ? 'minutes' : 'minute'
      } and ${second} ${second > 1 ? 'seconds' : 'second'}`;
    }
  }
  return message;
}

module.exports = formatDuration;

formatDuration(1050);
