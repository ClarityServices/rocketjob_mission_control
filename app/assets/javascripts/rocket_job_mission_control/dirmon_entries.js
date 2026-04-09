'use strict';

$(document).on('change', '.filter .state-toggle', function () {
  var active_states = $('.filter :checked');
  var param_string  = "?";
  active_states.each(function (_, state) {
    return param_string += 'states[]=' + $(state).attr('id') + '&';
  });
  return window.location.href = window.location.href.replace(/[\?#].*|$/, param_string);
});

$(document).on('click', '#properties', function () {
  var params          = $('#new_rocket_job_dirmon_entry').serialize();
  var new_dirmon_path = $('#properties').data('url') + ('?' + params);
  return window.location = new_dirmon_path;
});
