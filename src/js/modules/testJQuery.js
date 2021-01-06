import 'expose-loader?exposes[]=$&exposes[]=jQuery!jquery'; // eslint-disable-line

global.jQuery('#jquery-test').text('jQuery works');