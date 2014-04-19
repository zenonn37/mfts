'use strict';

angular.module('directives.skrollr', [])
    .directive('skrollr', function() {
        var directiveDefinitionObject = {
            link: function() {
                skrollr.init();
            }
        };

        return directiveDefinitionObject;
    });
/**
 * Created by pure coder on 4/18/2014.
 */
