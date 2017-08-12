myAppDirectives.directive('datePicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
		scope : true,
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    dateFormat:'dd/mm/yy',
                    onSelect:function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    }
});

myAppDirectives.directive('passwordCompare', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstfield = "#" + attrs.passwordCompare;

                //second field key up
            elem.on('keyup', function () {
                    scope.$apply(function () {
                        var isMatch = elem.val() === $(firstfield).val();
                        ctrl.$setValidity('valueMatch', isMatch);
                });
            });
        }
    }
}]);

myAppDirectives.directive('s', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            element.bind("click" , function(e){
                element.parent().find("a").removeClass("enabled"); // Vanilla jqLite!
                element.addClass("enabled");
            }); 
        }
    }
 }]);


