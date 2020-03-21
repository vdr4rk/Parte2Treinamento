angular.module("hackaton-stefanini").controller("MenuController", MenuController);
MenuController.$inject = ["$rootScope", "$scope", "$location",
    "$q", '$filter', '$routeParams', 'HackatonStefaniniService'];

function MenuController($rootScope, $scope, $location,
    $q, $filter, $routeParams, HackatonStefaniniService) {
    vm = this;

    vm.chamarPagina = function (pagina) {

        switch (pagina) {
            case 'cadastrarPessoa':
                $location.path("cadastrarPessoa");
                break;

            case 'EditarPessoa':
                $location.path("EditarPessoas");
                break;

            case 'listarPessoa':
                $location.path("listarPessoas");
                break;

            case 'EditarPerfis':
                $location.path("EditarPerfis");
                break;
                
            case 'listarPerfis':
                $location.path("listarPerfil");
                break;

            case 'home':
                $location.path("/");
                break;

            case 'cadastrarPerfil':
                $location.path("cadastrarPerfil");
                break;

            default:
                $location.path("/");
                break;
        }

        //vm.executaConsultaModelo();
    };

    vm.executaConsultaModelo = function () {
        var dados = {

        };

        HackatonStefaniniService.teste(dados).then(
            function (response) {
                if (response.data !== undefined)
                    console.log(response.data);
            }
        );
    };
}
