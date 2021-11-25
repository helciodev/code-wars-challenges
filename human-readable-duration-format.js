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
      message = `${hour} ${hour > 1 ? 'hours' : 'hour'} ${
        minutes
          ? minutes > 1
            ? minutes + ' minutes'
            : minutes + ' minute'
          : ''
      } and ${
        second ? (second > 1 ? second + ' seconds' : second + ' second') : ''
      } `;
    }

    message = message.replaceAll('  ', ' ');
    console.log(message);
  }
}

formatDuration(3602);
