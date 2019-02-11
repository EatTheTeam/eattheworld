'use strict';

app.component('countryOverview', {
    templateUrl: 'components/structural/country-overview.html',
    controller: 'CountryOverviewController',
    transclude: true
});

app.controller('CountryOverviewController', function () {
});
