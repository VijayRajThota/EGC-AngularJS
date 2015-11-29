var myAppCtrl = angular.module('myAppCtrl',[]);

myAppCtrl.controller('cardCtrl',['$scope','eCard','$routeParams','$location','$anchorScroll','$window','modals',
  function($scope,eCard,$routeParams,$location,$anchorScroll,$window,modals){
  $scope.cover=eCard.details();
  $scope.master = {};
  $scope.update = function(user) {
        var x = user.username;
        var y = user.password;
        if (x==null|| x==""|| x=="Required!")
        {
          $window.alert("enter valid information");
          $scope.user={username:'Required!'};
        }
        else if(y==null || y=="")
        {
          $window.alert("enter valid information");
        }
        else {
        $scope.master = angular.copy(user);
        $scope.reset();
        }
      };
$scope.confirmSomething = function() {
                    // The .open() method returns a promise that will be either
                    // resolved or rejected when the modal window is closed.
                    var promise = modals.open(
                        "confirm",
                        {
                            message: "Are you sure you want to taste that?!"
                        }
                    );
                    promise.then(
                        function handleResolve( response ) {
                            console.log( "Confirm resolved." );
                        },
                        function handleReject( error ) {
                            console.warn( "Confirm rejected!" );
                        }
                    );
                };
  $scope.register=function(signup){
     var x = signup.firstname;
     var y = signup.lastname;
     var a = signup.username;
     var b = signup.password;
     var c = signup.email;
    if (/\s/.test(a)) {
      $window.alert("username should be a single string");
      }
     else if(/^[a-zA-Z0-9- ]*$/.test(b) == false) {
      $window.alert("Special charcaters are not allowed");
      }
    else if(!(/\d/.test(b) && /[A-Z]/.test(b)))
    {
      $window.alert("Password must contain atleast 1 number and 1 Cap");
    }
    else{
      $scope.master = angular.copy(user);
      $scope.reset();
    }
     
  };
  $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };
$scope.reset();
$scope.displayCard=1;
$scope.cardDisp = function(){
  $scope.displayCard=1;
};
$scope.customDisp = function(){
  $scope.displayCard=2;
};

$scope.personDisp = function(){
$scope.displayCard =3 ;
};
  $scope.query=$routeParams.theme;
  $scope.cards=eCard.card();
  $scope.orderProp='age';  
  $scope.gotonext = function() {        
        $location.hash('services');        
        $anchorScroll();
      };
  $scope.slides=eCard.slides();
  
  $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };
        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
  $scope.cardsName=$routeParams.cardName;
  $scope.displays=eCard.display();
  $scope.confirmation = {   
    "amount": "25.00", 
    "values": [ "25.00", "50.00", "75.00", "80.00","100.00"] 
  };
 $scope.items = [{
  id: 1,
  label: 'Set your own amount'
  }, {
  id: 2,
  label: 'Quick Selection'
  
}];
$scope.selected=2;
$scope.test = {};
$scope.delivery =[{
id:1,
label:'Immediate Delivery'
},
{
id:2,
label:'Schedule Delivery'
}];
$scope.deliveryStatus=1;
$scope.confirm = function(confirmation) {
        $scope.test = angular.copy(confirmation);
        
      };
 //$scope.example = {
   //     value: new Date(2010, 11, 28, 14, 57)
     // };
  $scope.date = new Date();
  $scope.myDate = new Date();

  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() ,
      $scope.myDate.getDate()+1);

  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 11,
      $scope.myDate.getDate()); 
  $scope.payInfo = function(){
      $window.location.href='#/payment';
  };
 $scope.redeem = new function(code){
     $scope.test=1;
 };
var canvas = new fabric.Canvas('canvas');

 var rect = new fabric.Rect({
          left: 100, top: 100, fill: 'red', width: 20, height: 20, angle: 45
        });
  var circle = new fabric.Circle({
          radius: 20, fill: 'green', left: 100, top: 100
        });
  var triangle = new fabric.Triangle({
          width: 20, height: 30, fill: 'blue', left: 50, top: 50
        });

$scope.addRect = function(){
  canvas.add(rect);
  canvas.renderAll();
};
$scope.addCircle = function(){
 canvas.add(circle);
 canvas.renderAll();
};
$scope.addTraingle = function(){
canvas.add(triangle);
canvas.renderAll();
};


$scope.addBirthday = function (){
        var imgElementB = document.getElementById('birthday');
        var imgInstanceB = new fabric.Image(imgElementB,{
            height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceB);

      };
$scope.addAnniversary = function (){
        var imgElementA = document.getElementById('anniversary');
        var imgInstanceA = new fabric.Image(imgElementA,{
          height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceA);
      };
$scope.addUniversal = function (){
        var imgElementU = document.getElementById('universal');
        var imgInstanceU = new fabric.Image(imgElementU,{
         height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceU);
      };
 $scope.addChritsmas = function (){
        var imgElementC = document.getElementById('chritsmas');
        var imgInstanceC = new fabric.Image(imgElementC,{
          height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceC);
      };

$scope.addHalloween = function(){
        var imgElementH = document.getElementById('halloween');
        var imgInstanceH = new fabric.Image(imgElementH,{
         height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceH);
      };

$scope.addBaby =function (){
        var imgElementN = document.getElementById('baby');
        var imgInstanceN = new fabric.Image(imgElementN,{
           height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceN);
      };

$scope.addText = function(personalize){
  var x = personalize.text;
var t = new fabric.Text(x, {top:300});
        canvas.add(t);
};

$scope.clear = function(){
   if (confirm('Are you sure?')) {
          canvas.clear();
        }
};
$scope.remove = function(){
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
        }
      }; 
$scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };
$scope.drawingMode = 1;
$scope.drawMode = function(){
   if($scope.drawingMode==1)
      $scope.drawingMode=2;
  else
     $scope.drawingMode =1;
};

}]);


//var myAppCtrl = angular.module('myAppCtrl',[]);

/*myAppCtrl.controller(
            'cardCtrl', ['$scope','modals',
            function( $scope, modals ) {
                // I open an Alert-type modal.
                $scope.alertSomething = function() {
                    // The .open() method returns a promise that will be either
                    // resolved or rejected when the modal window is closed.
                    var promise = modals.open(
                        "alert",
                        {
                            message: "I think you are kind of beautiful!"
                        }
                    );
                    promise.then(
                        function handleResolve( response ) {
                            console.log( "Alert resolved." );
                        },
                        function handleReject( error ) {
                            console.warn( "Alert rejected!" );
                        }
                    );
                };
                // I open a Confirm-type modal.
                $scope.confirmSomething = function() {
                    // The .open() method returns a promise that will be either
                    // resolved or rejected when the modal window is closed.
                    var promise = modals.open(
                        "confirm",
                        {
                            message: "Are you sure you want to taste that?!"
                        }
                    );
                    promise.then(
                        function handleResolve( response ) {
                            console.log( "Confirm resolved." );
                        },
                        function handleReject( error ) {
                            console.warn( "Confirm rejected!" );
                        }
                    );
                };
                // I open a Prompt-type modal.
                $scope.signup = function() {
                    // The .open() method returns a promise that will be either
                    // resolved or rejected when the modal window is closed.
                    var promise = modals.open(
                        "prompt",
                        {
                            message: "Who rocks the party the rocks the body?",
                            placeholder: "MC Lyte."
                        }
                    );
                    promise.then(
                        function handleResolve( response ) {
                            console.log( "Prompt resolved with [ %s ].", response );
                        },
                        function handleReject( error ) {
                            console.warn( "Prompt rejected!" );
                        }
                    );
                };
            }]);
*/

/*myAppCtrl.controller(
            'AlertModalController',['$scope','modals',
            function( $scope, modals ) {
                // Setup default values using modal params.
                $scope.message = ( modals.params().message || "Whoa!" );
                // ---
                // PUBLIC METHODS.
                // ---
                // Wire the modal buttons into modal resolution actions.
                $scope.close = modals.resolve;
                // I jump from the current alert-modal to the confirm-modal.
                $scope.jumpToConfirm = function() {
                    // We could have used the .open() method to jump from one modal
                    // to the next; however, that would have implicitly "rejected" the
                    // current modal. By using .proceedTo(), we open the next window, but
                    // defer the resolution of the current modal until the subsequent
                    // modal is resolved or rejected.
                    modals.proceedTo(
                        "confirm",
                        {
                            message: "I just came from Alert - doesn't that blow your mind?",
                            confirmButton: "Eh, maybe a little",
                            denyButton: "Oh please"
                        }
                    )
                    .then(
                        function handleResolve() {
                            console.log( "Piped confirm resolved." );
                        },
                        function handleReject() {
                            console.warn( "Piped confirm rejected." );
                        }
                    );
                };
            }]);*/

myAppCtrl.controller(
            'ConfirmModalController',['$scope','modals',
            function( $scope, modals ) {
                var params = modals.params();
                // Setup defaults using the modal params.
                $scope.message = ( params.message || "Are you sure?" );
                $scope.confirmButton = ( params.confirmButton || "Yes!" );
                $scope.denyButton = ( params.denyButton || "Oh, hell no!" );
                // ---
                // PUBLIC METHODS.
                // ---
                // Wire the modal buttons into modal resolution actions.
                $scope.confirm = modals.resolve;
                $scope.deny = modals.reject;
            }]);
        // -------------------------------------------------- //
        // -------------------------------------------------- //
        // I control the Prompt modal window.
        // --
        // NOTE: This controller gets "modals" injected; but, it is in no way
        // different than any other Controller in your entire AngularJS application.
        // It takes services, manages the view-model, and knows NOTHING about the DOM.*/
/*myAppCtrl.controller('PromptModalController',['$scope','modals',
            function( $scope, modals ) {
                // Setup defaults using the modal params.
                $scope.message = ( modals.params().message || "Give me." );
                // Setup the form inputs (using modal params).
                $scope.form = {
                    input: ( modals.params().placeholder || "" )
                };
                $scope.errorMessage = null;
                // ---
                // PUBLIC METHODS.
                // ---
                // Wire the modal buttons into modal resolution actions.
                $scope.cancel = modals.reject;
                // I process the form submission.
                $scope.submit = function() {
                    // If no input was provided, show the user an error message.
                    if ( ! $scope.form.input ) {
                        return( $scope.errorMessage = "Please provide something!" );
                    }
                    modals.resolve( $scope.form.input );
                };
            }]);
      
*/


