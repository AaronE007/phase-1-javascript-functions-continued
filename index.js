function saturdayFun(activity = 'roller-skate') {
    return(`This Saturday, I want to ${activity}!`);
  }
  saturdayFun();
  saturdayFun('play ball');

  function mondayWork(work = 'go to the office') {
    return(`This Monday, I will ${work}.`);
  }
  function wrapAdjective(star = '*'){
    return function (name = 'special'){
        return (`You are ${star}${name}${star}!`);

      }
  }
