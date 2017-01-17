/**
  ng-click not working
*/
var app = angular.module('app', []);

app.controller('mainCtrl', ["$scope", function($scope) {
  $scope.init = function(){
  };
}]);


app.controller('contactCtrl', ["$scope", function($scope) {

  $scope.memos = [
                  {title:'test_list', content:'test', tag:'후보키,릴레이션,튜플,유일성,희소성'},
                  {title:'기본키', content:'기본키는 후보키 중에서 특별히 선정된 키로 중복된 값을 가질 수 없다.키본키는 후보키의 성질을 갖는다.유일성과 최소성을 가지며 튜플을 식별하기 위해 반드시 필요한 키이다.기본키는 NULL 값을 가질 수 없다. 즉, 튜플에서 기본키로 설정된 속성에는 NULL 값이 있어서는 안 된다.', tag:'기본키,후보키,유일성,최소성,튜플,NULL'},
                  {title:'대체키', content:'대체키는 후보키 중에서 선정된 기본키를 제외한 나머지 후보키를 의미한다.', tag:'대체키,후보키,나머지'},
                  {title:'test', content:'복합키 또는 연결키라고 한다.기본키로 사용되며 2개 이상의 열을 1개의 후보키로 만들어 기본키로 활용되는 키슈퍼키는 한 릴레이션 내에 있는 속성들의 집합으로 구성된 키를 말한다.릴레이션을 구성하는 모든 튜플 중 슈퍼키로 구성된 속성의 집합과 동일한 값은 나타나지 않는다.슈퍼키는 릴레이션을 구성하는 모든 튜플에 대해 유일성은 만족하지만, 최소성은 만족하지 못한다.', tag:'복합키,연결키,최소성,'},
                  {title:'외래키', content:'외래키는 다른 릴레이션의 기본키를 참조하는 속성 또는 속성들의 집합을 의미한다.외래키는 릴레이션 간의 관계를 표현할 때 사용한다.한 릴레이션에 속한 속성 A와 참조 릴레이션의 기본키인 B가 동일한 도메인상에서 정의되었을 때의 속성 A를 외래키라고 한다.외래키는 참조 릴레이션의 기본키와 동일한 키 속성을 가진다.', tag:'외래키,릴레이션,도메인상,속성'}
               ];

  $scope.init = function(){
  };

  // $scope.goPage = function(page){
  //   console.log("go page : " + page);
  //   switch(page){
  //     case "faq":
  //       location.href = "/faq";
  //       break;
  //     case "question":
  //       location.href = "/question";
  //       break;
  //   }
  // };
}]);
