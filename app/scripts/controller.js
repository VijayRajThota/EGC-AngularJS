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

$scope.save = function(){
 var json = canvas.toJSON();

canvas.clear();

canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
 
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




}]);

myAppCtrl.controller('CustomizeCtrl',['$scope', function($scope){
var canvas = new fabric.Canvas('c', {isDrawingMode: true });

$scope.drawingModeOptions = 1;

$scope.styles = [{
code: 1,
style : 'Pencil'
},{
code: 2,
style : 'Circle'
},{
code: 3,
style : 'Spray'
},{
code: 4,
style : 'Pattern'
},{
code: 5,
style : 'hline'
},{
code: 6,
style : 'vline'
},{
code: 7,
style : 'square'
},{
code: 8,
style : 'diamond'
},{
code: 9,
style : 'texture'
}];


$scope.drawingMode = function(){
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if(canvas.isDrawingMode){
    $scope.drawingModeOptions = 1;
  }
  else
  {
    $scope.drawingModeOptions = 0;
  }
};



if (fabric.PatternBrush) {
    var vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };
 var hLinePatternBrush = new fabric.PatternBrush(canvas);
 hLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

 var squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 2;

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext('2d');

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;
    };
var diamondPatternBrush = new fabric.PatternBrush(canvas);
    diamondPatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 5;
      var patternCanvas = fabric.document.createElement('canvas');
      var rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color
      });
      var canvasWidth = rect.getBoundingRectWidth();

      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
      rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

      var ctx = patternCanvas.getContext('2d');
      rect.render(ctx);

      return patternCanvas;
    };

    var img = new Image();
    img.src = 'http://fabricjs.com/assets/honey_im_subtle.png';

    var texturePatternBrush = new fabric.PatternBrush(canvas);
    texturePatternBrush.source = img;

  }

$scope.customStyle= function(){
 if ($scope.test == 5) {
      canvas.freeDrawingBrush = vLinePatternBrush;
    }
    else if ($scope.test == 6) {
      canvas.freeDrawingBrush = hLinePatternBrush;
    }
    else if ($scope.test == 7) {
      canvas.freeDrawingBrush = squarePatternBrush;
    }
    else if ($scope.test == 8) {
      canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else if ($scope.test == 9) {
      canvas.freeDrawingBrush = texturePatternBrush;
    }
    else {
      canvas.freeDrawingBrush = new fabric[$scope.test + 'Brush'](canvas);
    }

    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = $scope.lineColor;
      canvas.freeDrawingBrush.width = parseInt($scope.lineWidth, 10) || 1;
      canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
    }
};

$scope.drawingColor = function(){
  canvas.freeDrawingBrush.color = $scope.lineColor;
};

$scope.drawingLineWidth = function(){
  canvas.freeDrawingBrush.width = parseInt($scope.lineWidth, 10) || 1;
    this.previousSibling.innerHTML = $scope.lineWidth;
};

$scope.drawingShadowColor = function(){
  canvas.freeDrawingBrush.shadowColor = $scope.shadowColor;
};

$scope.drawingShadowWidth= function(){
  canvas.freeDrawingBrush.shadowBlur = parseInt($scope.shadowWidth, 10) || 0;
    this.previousSibling.innerHTML = $scope.shadowWidth;
};

$scope.drawingShadowOffset = function(){
  canvas.freeDrawingBrush.shadowOffsetX =
    canvas.freeDrawingBrush.shadowOffsetY = parseInt($scope.shadowOffset, 10) || 0;
    this.previousSibling.innerHTML = $scope.shadowOffset;
};

fabric.Object.prototype.transparentCorners = false;

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
            left: 100,
            top: 100,
            angle: 30,
            opacity: 0.85
        });
        canvas.add(imgInstanceB);

      };
$scope.addAnniversary = function (){
        var imgElementA = document.getElementById('anniversary');
        var imgInstanceA = new fabric.Image(imgElementA,{
          left: 100,
            top: 100,
            angle: 30,
            opacity: 0.85
        });
        canvas.add(imgInstanceA);
      };
$scope.addUniversal = function (){
        var imgElementU = document.getElementById('universal');
        var imgInstanceU = new fabric.Image(imgElementU,{
         left: 100,
            top: 100,
            angle: 30,
            opacity: 0.85
        });
        canvas.add(imgInstanceU);
      };
 $scope.addChritsmas = function (){
        var imgElementC = document.getElementById('chritsmas');
        var imgInstanceC = new fabric.Image(imgElementC,{
          left: 100,
            top: 100,
            angle: 30,
            opacity: 0.85
        });
        canvas.add(imgInstanceC);
      };

$scope.addHalloween = function(){
        var imgElementH = document.getElementById('halloween');
        var imgInstanceH = new fabric.Image(imgElementH,{
         left: 100,
            top: 100,
            angle: 30,
            opacity: 0.85
        });
        canvas.add(imgInstanceH);
      };

$scope.addBaby =function (){
        var imgElementN = document.getElementById('baby');
        var imgInstanceN = new fabric.Image(imgElementN,{
          left: 100,
            top: 100,
            angle: 30,
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

$scope.save = function(){
 var json = canvas.toJSON();

canvas.clear();

canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
 
};
$scope.remove = function(){
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
        }
      }; 

}]);
//myAppCtrl.controller('CustomizeCtrl',['$scope', function($scope))
/*myAppCtrl.controller(
            'CustomizeCtrl',['$scope',
            function( $scope ) {
            var fabricUrl = 'http://fabricjs.com/lib/fabric.js';
        if (document.location.search.indexOf('load_fabric_from=') > -1) {
          var match = document.location.search.match(/load_fabric_from=([^&]*)/);
          if (match && match[1]) {
            fabricUrl = match[1];
          }
        }
$scope.customize = fabricUrl;

 var $ = function(id){
  return document.getElementById(id)
};

  var canvas = this.__canvas = new fabric.Canvas('c', {
    isDrawingMode: true
  });

fabric.Object.prototype.transparentCorners = false;
var drawingModeEl = $('drawing-mode'),
      drawingOptionsEl = $('drawing-mode-options'),
      drawingColorEl = $('drawing-color'),
      drawingShadowColorEl = $('drawing-shadow-color'),
      drawingLineWidthEl = $('drawing-line-width'),
      drawingShadowWidth = $('drawing-shadow-width'),
      drawingShadowOffset = $('drawing-shadow-offset'),
      clearEl = $('clear-canvas');
      imageE1= $('add-image');
      saveE1= $('imageSaver');
      loadE1 = $('imageLoader');

clearEl.onclick = function() { canvas.clear() };
  
  drawingModeEl.onclick = function() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
      drawingModeEl.innerHTML = 'Cancel drawing mode';
      drawingOptionsEl.style.display = '';
    }
    else {
      drawingModeEl.innerHTML = 'Enter drawing mode';
      drawingOptionsEl.style.display = 'none';
    }
  };

  if (fabric.PatternBrush) {
    var vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 2;

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext('2d');

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;
    };

    var diamondPatternBrush = new fabric.PatternBrush(canvas);
    diamondPatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 5;
      var patternCanvas = fabric.document.createElement('canvas');
      var rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color
      });

      var canvasWidth = rect.getBoundingRectWidth();

      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
      rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

      var ctx = patternCanvas.getContext('2d');
      rect.render(ctx);

      return patternCanvas;
    };

    var img = new Image();
    img.src = 'http://fabricjs.com/assets/honey_im_subtle.png';

    var texturePatternBrush = new fabric.PatternBrush(canvas);
    texturePatternBrush.source = img;
  }

  $('drawing-mode-selector').onchange = function() {

    if (this.value === 'hline') {
      canvas.freeDrawingBrush = vLinePatternBrush;
    }
    else if (this.value === 'vline') {
      canvas.freeDrawingBrush = hLinePatternBrush;
    }
    else if (this.value === 'square') {
      canvas.freeDrawingBrush = squarePatternBrush;
    }
    else if (this.value === 'diamond') {
      canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else if (this.value === 'texture') {
      canvas.freeDrawingBrush = texturePatternBrush;
    }
    else {
      canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
    }

    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = drawingColorEl.value;
      canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
    }
  };

  drawingColorEl.onchange = function() {
    canvas.freeDrawingBrush.color = this.value;
  };
  drawingShadowColorEl.onchange = function() {
    canvas.freeDrawingBrush.shadowColor = this.value;
  };
  drawingLineWidthEl.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
  };
  drawingShadowWidth.onchange = function() {
    canvas.freeDrawingBrush.shadowBlur = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
  };
  drawingShadowOffset.onchange = function() {
    canvas.freeDrawingBrush.shadowOffsetX =
    canvas.freeDrawingBrush.shadowOffsetY = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
  };

  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    canvas.freeDrawingBrush.shadowBlur = 0;
  }


            }]);*/


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


