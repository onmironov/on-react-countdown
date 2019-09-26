# Simple react countdown

Simple countdown timer for React.

## Usage

### Install

You can use `npm` or `yarn`:

``` text
npm install on-react-countdown
```

``` text
yarn add on-react-countdown
```

### Basic usage

``` js
import React from 'react';
import Countdown from 'on-react-countdown';
 
ReactDOM.render(
  <Countdown end={1893456000} />,
  document.getElementById('root')
);
```

## Props

Name      | Type | Default | Description
:-------- |:-----:| :-----: | :-------
end  | number  | required | End of timer on UNIX
utc  | number  | `0` | UTC zone
lang  | string  | `en` | Language, `en` or `ru`
className  | string  | `Countdown` | HTML class fo0r elements
text  | object  | look prop `text` | Object with words
separator  | string  | `' '` | Separator for elements
wordsEndingOff  | bool  | `false` | If you have just one word (look prop `text` and `wordsEndingOff` for detail)
wordsOff  | bool  | `false` | Show only values
hideZeroValues  | bool  | `false` | Show only value > 0
alwaysDoubleDigit  | bool  | `false` | Show values 07 or 03 instead 7 and 3
limit  | number  | `null` | How much periods show (show only value > 0)
onEnd  | func  | `() => {}` | Callback function for end of countdown

#### `end`

End of timer in UNIX format

#### `utc`

UTC zone. If you need countdown for New York - `utc={-4}`, for Moscow - `utc={3}`

#### `lang`

Language for days or hours naming. At now supported 2 language -- english and russian. For default `lang === 'en'`, if you want use russian language, you must use `lang={'ru'}`.
`lang={'en'}` also support all languages, witch haw two form of words: French, German and overs (for more information look prop `text`)

#### `className`

Class for parent and children

#### `text`

Object with days, hours, minutes and seconds naming. By default it:

``` js
{
    days: ['day', 'days'],
    hours: ['hour', 'hours'],
    minutes: ['minute', 'minutes'],
    seconds: ['second', 'seconds'],
}
```

For Russian language use:

``` js
{
    days: ['день', 'дня', 'дней'],
    hours: ['час', 'часа', 'часов'],
    minutes: ['минута', 'минуты', 'минут'],
    seconds: ['секунда', 'секунды', 'секунд'],
}
```

For German language use:

``` js
{
    days: ['tag', 'tage'],
    ...
}
```

For French language use:

``` js
{
    days: ['jour', 'jours'],
    ...
}
```

If you use prop `wordsEndingOff={true}` for english:

``` js
{
    days: 'd',
    hours: 'h',
    minutes: 'm',
    seconds: 's',
}
```

for russian: 

``` js
{
    days: 'дн.',
    hours: 'ч.',
    minutes: 'мин.',
    seconds: 'сек.',
}
```

#### `separator`

Separator for periods

#### `wordsEndingOff`

Set `wordsEndingOff={true}` you want use prop `text` like this:

``` js
{
    days: 'd',
    hours: 'h',
    minutes: 'm',
    seconds: 's',
}
```

#### `wordsOff`

If you want only values^ without text

#### `hideZeroValues`

Hide values then `value === 0`, something like **97 days 42 seconds**

#### `alwaysDoubleDigit`

Show **09 days 02 hours 17 minutes 01 second** instead **9 days 2 hours 17 minutes 1 second**

#### `limit`

If you want show only **9 days 15 seconds** instead **9 days 0 hours 0 minutes 15 seconds**

#### onEnd

Callback function witch call on end of countdown
