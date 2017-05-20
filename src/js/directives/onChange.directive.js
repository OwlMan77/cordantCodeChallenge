
//https://stackoverflow.com/questions/14477904/how-to-create-on-change-directive-for-angularjs

//custom directive as I want to make an api call to obtain geolocation when making a new candidate

app.directive('onChange', function() {
    return {
        restrict: 'A',
        scope:{'onChange':'=' },
        link: function(scope, elm, attrs) {
            scope.$watch('onChange', function(nVal) { elm.val(nVal); });
            elm.bind('blur', function() {
                var currentValue = elm.val();
                if( scope.onChange !== currentValue ) {
                    scope.$apply(function() {
                        scope.onChange = currentValue;
                    });
                }
            });
        }
    };
});
