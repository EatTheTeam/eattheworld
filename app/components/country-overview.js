'use strict';

app.component('countryOverview', {
    templateUrl: 'components/country-overview.html',
    controller: 'CountryOverviewController',
    transclude: true
});

app.controller('CountryOverviewController', function () {
});
