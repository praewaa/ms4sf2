/**
 * Created by USER on 7/20/2015.
 */
'use strict';
var plotService = angular.module('plotServices',['ngResource']);
plotService.factory('plotService',function($resource){
    return $resource('index.php/plot/:id', { id: '@_id' }, {
        update: {
            method: 'PUT' // this method issues a PUT request
        }});
});
