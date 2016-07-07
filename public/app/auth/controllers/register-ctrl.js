  'use strict';
  angular.module('app.auth').controller('RegisterCtrl', RegisterCtrl);

  function RegisterCtrl($scope, $templateRequest, $compile) {
    //handle steps
    $scope.currentStep = 1;

    $scope.nextStep = function (currentStep) {
      if (currentStep === 1) {
        closePopUp();
      }
      $scope.currentStep++;
    }

    //handle popup for registration in step 1
    var $overlay = $(".cf-overlay");
    var $target = $('.cf-popup-01');

    $scope.openPopUp = function () {
      loadModal();
    }

    $scope.closePopUp = function () {
      closePopUp();
    }

    // handle click addlanguage
    $scope.languages = [
      {
        types: [
          {'value': 1, 'name': '日本語'},{'value': 2, 'name': '英語'}
        ],
        levels: [
          {'value': 1, 'name': '日常会話レベル'},{'value': 2, 'name': 'ビジネスレベル'},{'value': 3, 'name': 'ネイティブレベル'}
        ]
      }
    ];

    $scope.addLanguage = function () {
       var tmp = {
        types: [
          {'value': 1, 'name': '日本語'},{'value': 2, 'name': '英語'}
        ],
        levels: [
          {'value': 1, 'name': '日常会話レベル'},{'value': 2, 'name': 'ビジネスレベル'},{'value': 3, 'name': 'ネイティブレベル'}
        ]
      }
      $scope.languages.push(tmp);
    }

    // handle click addskills
    $scope.skills = [
      {
        types : [
          {'value': 1, 'name': '日本語'},{'value': 2, 'name': '英語'}
        ]
      }
    ];

    $scope.addSkill = function () {
      var tmp = {
        types : [
          {'value': 1, 'name': '日本語'},{'value': 2, 'name': '英語'}
        ]
      };
      $scope.skills.push(tmp);
    }

    //add jobs
    $scope.jobs = [
      {
        types: [
          {'value': 1, 'name': '選択肢'},{'value': 2, 'name': '選択肢'}
        ]
      }
    ];

    $scope.addJob = function () {
      var tmp = {
        types: [
          {'value': 1, 'name': '選択肢'},{'value': 2, 'name': '選択肢'}
        ]
      };
      $scope.jobs.push(tmp);
    }

    //handle add area 
    $scope.areas = [
      {
        types: [
          {'value': 1, 'name': '日本語'},{'value': 2, 'name': '英語'}
        ],
        levels: [
          {'value': 1, 'name': '日常会話レベル'},{'value': 2, 'name': 'ビジネスレベル'},{'value': 3, 'name': 'ネイティブレベル'}
        ]
      }
    ];

    $scope.addArea = function () {
       var tmp = {
        types: [
          {'value': 1, 'name': '日本語'},{'value': 2, 'name': '英語'}
        ],
        levels: [
          {'value': 1, 'name': '日常会話レベル'},{'value': 2, 'name': 'ビジネスレベル'},{'value': 3, 'name': 'ネイティブレベル'}
        ]
      }
      $scope.areas.push(tmp);
    }

    //functions utils
    function closePopUp() {
      $target.removeClass("is-opened");
      $overlay.removeClass("is-opened");
    }

    function openPopUp() {
      $target.addClass("is-opened");
      $overlay.addClass("is-opened");
    }

    function loadModal() {
      $templateRequest('app/cfn/views/templates/popup.tpl.html').then(function(template) {

        $target.html($compile(template)($scope));
        var targetPos = $(document).scrollTop() + ($(window).height() - $target.height()) / 2;
        $target.css({
          top: targetPos
        });
        $overlay.css({
          height: $(document).height()+"px"
        });
        $overlay.click(function(){
          $scope.closePopUp();
        });
        openPopUp();
      });
    };
  }
