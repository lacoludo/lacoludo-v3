3// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(bac, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 3000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 8 },
  to: { color: '#01D5DA', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('<b>BAC STG</b><br>LFP (INDE)');
    }
  }
});
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle(dut, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 3000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 8 },
  to: { color: '#01D5DA', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('<b>DUT GLT</b><br>IUT D\'ÉVRY');
    }
  }
});
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle(mas, {
  color: '#fff',
  trailColor: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 3000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#01D5DA', width: 8 },
  to: { color: '#01D5DA', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('<b>MASTÈRE DEV</b><br>ECV DIGITAL');
    }
  }
});
bar.text.style.fontSize = '2rem';

bar.animate(0.3);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle(bacsmall, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 3000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 8 },
  to: { color: '#01D5DA', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('<b>BAC STG</b><br>LFP (INDE)');
    }
  }
});
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle(dutsmall, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 3000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#fff', width: 8 },
  to: { color: '#01D5DA', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('<b>DUT GLT</b><br>IUT D\'ÉVRY');
    }
  }
});
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle(massmall, {
  color: '#fff',
  trailColor: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 3000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#01D5DA', width: 8 },
  to: { color: '#01D5DA', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('<b>MASTÈRE DEV</b><br>ECV DIGITAL');
    }
  }
});
bar.text.style.fontSize = '2rem';

bar.animate(0.3);  // Number from 0.0 to 1.0
