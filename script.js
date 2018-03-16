((angular) => {
    'use strict';

    angular
        .module('dedojr')
        .directive('graficoSolidgauge', graficoSolidgauge);

    graficoSolidgauge.$inject = [];

    function graficoSolidgauge() {
        return {
            restrict: 'E',
            replace: false,
            require: 'ngModel',
            scope: {
                model: '=ngModel',
                titulo: '@'
            },
            templateUrl: 'app/core/views/grafico-solidgauge.html',
            link: (scope, element, attrs, ngModelController) => {
                
                scope.$watch('model', () => {
                    scope.$eval(`${attrs.ngModel} = model`);
                });

                scope.$watch(attrs.ngModel, (value) => {
                    scope.resultado = (value > 200) ? 200 : value;
                    scope.porcento = {'transform': `rotate(${scope.resultado * (180 / 200) - 45}deg)`};
                });
            }
        }
    };
})(angular);
