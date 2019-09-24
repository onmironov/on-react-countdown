export const time = {
  days: 86400,
  hours: 3600,
  minutes: 60,
};

const enEnds = {
  days: ['day', 'days'],
  hours: ['hour', 'hours'],
  minutes: ['minute', 'minutes'],
  seconds: ['second', 'seconds'],
};

const ruEnds = {
  days: ['день', 'дня', 'дней'],
  hours: ['час', 'часа', 'часов'],
  minutes: ['минута', 'минуты', 'минут'],
  seconds: ['секунда', 'секунды', 'секунд'],
};

export const getEndOfWord = (lang, type, count) => {
  const cases = [2, 0, 1, 1, 1, 2];

  if (lang === 'en') {
    const index = count === 1 ? 0 : 1;
    return enEnds[type][index];
  }

  return ruEnds[type][
    (count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]
  ];
};
