var myAppCtrl = angular.module('myAppCtrl',['ngCookies']);

myAppCtrl.controller('coverCtrl',['$scope','$route','$routeParams', '$location','eCard','alterDollar','$cookies','$anchorScroll','$window','modals','$http',
  function($scope,$route,$routeParams,$location,eCard,alterDollar,$cookies,$anchorScroll,$window,modals,$http){

//coverpage
 $scope.cover=eCard.details(); 

//login
 $scope.update = function(user) {
     /*    var x = user.username;
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
        else {*/

        $cookies.put('username', user.username);
        $scope.SignInResult = alterDollar.signingIn({username:user.username,password:user.password});
        $scope.SignInResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/homepage';            
          }
          else{
            $cookies.remove('username');
            $window.alert("Error");
          }
       });
    //  }
      };

//pop up     
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

//signup
$scope.register=function(signup){
 /* var x = signup.name;
   var a = signup.username;
     var b = signup.password;
     var c = signup.email;
     var y = signup.phone; 
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
    else{*/
    $cookies.put('username', signup.username);
    $scope.signUpResult=alterDollar.signingUp({name:signup.name, username:signup.username, email:signup.email, password:signup.password, phone:signup.phone});
    $scope.signUpResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/homepage';
          }
          else{
            $cookies.remove('username');
            $window.alert("Error");
          }
       });    
 //  }
  };

  }]);


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

myAppCtrl.controller('homeCtrl',['$scope','$route','$routeParams', '$location','eCard','alterDollar','$cookies','$anchorScroll','$window','modals','$http',
  function($scope,$route,$routeParams,$location,eCard,alterDollar,$cookies,$anchorScroll,$window,modals,$http){
 
//card type
$scope.cardDisp = function(){
  $scope.displayCard=1;
};
$scope.customDisp = function(){
  $scope.displayCard=2;
};

$scope.personDisp = function(){
$scope.displayCard =3;
};


//select card
 $scope.cards=alterDollar.getCards();
  $scope.orderProp='id'; 

//redirect to display page
 $scope.specificCard = function(card){
  localStorage.setItem('id', card.url);
  localStorage.setItem('cardID', card.card_id);
  $window.location.href='#/cardDetails'
 };
  }]);



myAppCtrl.controller('personalizeCtrl',['$scope','$route','$routeParams', '$location','eCard','alterDollar','$cookies','$anchorScroll','$window','modals','$http',
  function($scope,$route,$routeParams,$location,eCard,alterDollar,$cookies,$anchorScroll,$window,modals,$http){
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
        $cookies.put('category','birthday');
        var imgElementB = document.getElementById('birthday');
        var imgInstanceB = new fabric.Image(imgElementB,{
            height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceB);

      };
$scope.addAnniversary = function (){
        $cookies.put('category','anniversary');
        var imgElementA = document.getElementById('anniversary');
        var imgInstanceA = new fabric.Image(imgElementA,{
          height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceA);
      };
$scope.addUniversal = function (){
        $cookies.put('category','universal');
        var imgElementU = document.getElementById('universal');
        var imgInstanceU = new fabric.Image(imgElementU,{
         height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceU);
      };
$scope.addChritsmas = function (){
        $cookies.put('category','Christmas');
        var imgElementC = document.getElementById('chritsmas');
        var imgInstanceC = new fabric.Image(imgElementC,{
          height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceC);
      };

$scope.addHalloween = function(){
        $cookies.put('category','halloween');
        var imgElementH = document.getElementById('halloween');
        var imgInstanceH = new fabric.Image(imgElementH,{
         height: 300,
            width: 650,
            opacity: 0.85
        });
        canvas.add(imgInstanceH);
      };

$scope.addBaby =function (){
        $cookies.put('category','baby shower');
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

$scope.creds = {
  bucket: 'vijayrajthota',
  access_key: 'AKIAJW56SW3GLBRIIHHQ',
  secret_key: 'RuPHy9dsCYrb59xidJ7KVmdCqLf8gCzyDxD59qIf'
}

$scope.generateUUID = function(){
 var d = new Date().getTime();
 var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
 return uuid;
};

$scope.save = function(){
    var image = canvas.toDataURL("image/png");
    localStorage.setItem('id', image);   
   $scope.vijay= localStorage.getItem('id');
   var x = $scope.generateUUID();
    AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
    AWS.config.region = 'us-west-2';
    var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
    var x = $scope.generateUUID();
    var params = { Key: x, ContentType: 'png' , Body: $scope.vijay, ServerSideEncryption: 'AES256' };
    bucket.putObject(params, function(err, data) {
      if(err) {
        // There Was An Error With Your S3 Config
        alert(err.message);
        return false;
      }
      else {
        // Success!
        var y = "httpshttps://s3-us-west-2.amazonaws.com/vijayrajthota/"+x;
        alterDollar.sendUrl({category:$cookies.get('category'), url:y});
        alert('Upload Done');
        $window.location.href='#/cardDetails';
      }
    });
};

$scope.remove = function(){
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
        }
      }; 


  }]);

myAppCtrl.controller('CustomizeCtrl',['$scope','$route','$routeParams', '$location','eCard','alterDollar','$cookies','$anchorScroll','$window','modals','$http',
  function($scope,$route,$routeParams,$location,eCard,alterDollar,$cookies,$anchorScroll,$window,modals,$http){
var canvas = new fabric.Canvas('c', {isDrawingMode: true });

$cookies.put('category', $scope.personalize_theme);

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


$scope.generateUUID = function(){
 var d = new Date().getTime();
 var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
 return uuid;
};

$scope.save = function(){
var image = canvas.toDataURL("image/png");
    localStorage.setItem('id', image);   
   $scope.vijay= localStorage.getItem('id');
   var x = $scope.generateUUID();
    AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
    AWS.config.region = 'us-west-2';
    var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
    var x = $scope.generateUUID();
    var params = { Key: x, ContentType: 'png' , Body: $scope.vijay, ServerSideEncryption: 'AES256' };

    bucket.putObject(params, function(err, data) {
      if(err) {
        // There Was An Error With Your S3 Config
        alert(err.message);
        return false;
      }
      else {
        // Success!
        var y = "httpshttps://s3-us-west-2.amazonaws.com/vijayrajthota/"+x;
        alterDollar.sendUrl({category:$cookies.get('category'), url:y});
        alert('Upload Done');
        $window.location.href='#/cardDetails';
      }
    });
 
};
$scope.remove = function(){
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
        }
      }; 

document.getElementById('imageLoader').onchange = function handleImage(e) {
var reader = new FileReader();
  reader.onload = function (event){
    var imgObj = new Image();
    imgObj.src = event.target.result;
    imgObj.onload = function () {
      var image = new fabric.Image(imgObj);
      image.set({
            angle: 0,
            padding: 10,
            cornersize:10,
            height:110,
            width:110,
      });
      canvas.centerObject(image);
      canvas.add(image);
      canvas.renderAll();
    }
  }
  reader.readAsDataURL(e.target.files[0]);
}

}]);

myAppCtrl.controller('cardDetailsCtrl',['$scope','$route','$routeParams', '$location','eCard','alterDollar','$cookies','$anchorScroll','$window','modals','$http',
  function($scope,$route,$routeParams,$location,eCard,alterDollar,$cookies,$anchorScroll,$window,modals,$http){

//image display
$scope.vijay = localStorage.getItem('id');
$scope.sai = localStorage.getItem('cardId');

//card Details
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

  $scope.confirmCard = function(confirmation){
     $cookies.put('amount', confirmation.amount);
     $cookies.put('email', confirmation.email);
     $cookies.put('phone', confirmation.phone);
     $cookies.put('message', confirmation.message);
      $scope.confirmCardResult = alterDollar.confirmingCard({username: $cookies.get('username'), card_id: $scope.sai , amount: confirmation.amount, receiver_name: confirmation.name, receiver_email: confirmation.email, receiver_phone: confirmation.phone, message:confirmation.message, delivery_date: confirmation.date});
     $scope.confirmCardResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/payment';
          }
          else{
            $window.alert("Error");
          }
       });     

  };

  }]);

myAppCtrl.controller('paymentCtrl',['$scope','$route','$routeParams', '$location','eCard','alterDollar','$cookies','$anchorScroll','$window','modals','$http',
  function($scope,$route,$routeParams,$location,eCard,alterDollar,$cookies,$anchorScroll,$window,modals,$http){
 
 $scope.vijay = localStorage.getItem('id');
 $scope.amount = $cookies.get('amount');
 $scope.email = $cookies.get('email');
 $scope.phone = $cookies.get('phone');
 $scope.message = $cookies.get('message');
 var clientToken = alterDollar.clientToken();
  $scope.paymentSuccess = alterDollar.paymentService({payment_method_nonce:'fake-valid-payroll-nonce'});
  localStorage.setItem('test', clientToken);
/*braintree.setup(clientToken, "dropin", {
  container: "payment-form",
  paymentMethodNonceReceived: function(obj){
    $scope.paymentSuccess = alterDollar.paymentService({payment_method_nonce:obj});
 }
});*/

  }]);



myAppCtrl.controller('redeemCtrl',['$scope','$route','$routeParams', '$location','eCard','alterDollar','$cookies','$anchorScroll','$window','modals','$http',
  function($scope,$route,$routeParams,$location,eCard,alterDollar,$cookies,$anchorScroll,$window,modals,$http){

//getCard

$scope.hello = $routeParams.token;




  //login
 $scope.update = function(user) {
     /*    var x = user.username;
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
        else {*/

        $cookies.put('username', user.username);
        $scope.SignInResult = alterDollar.signingIn({username:user.username,password:user.password});
        $scope.SignInResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/confirmDetails';            
          }
          else{
            $cookies.remove('username');
            $window.alert("Error");
          }
       });
    //  }
      };

//signup
$scope.register=function(signup){
 /* var x = signup.name;
   var a = signup.username;
     var b = signup.password;
     var c = signup.email;
     var y = signup.phone; 
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
    else{*/
    $cookies.put('username', signup.username);
    $scope.signUpResult=alterDollar.signingUp({name:signup.name, username:signup.username, email:signup.email, password:signup.password, phone:signup.phone});
    $scope.signUpResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/confirmDetails';
          }
          else{
            $cookies.remove('username');
            $window.alert("Error");
          }
       });    
 //  }
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
  }]);

myAppCtrl.controller('redeemCardCtrl',['$scope','$route','$routeParams', '$location','eCard','alterDollar','$cookies','$anchorScroll','$window','modals','$http',
  function($scope,$route,$routeParams,$location,eCard,alterDollar,$cookies,$anchorScroll,$window,modals,$http){
//redemption

$scope.redeem = function(redeemCode){
$scope.redeemResult = alterDollar.redeemption({code:redeemCode});
    $scope.redeemResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/dashboard';
          }
          else{
            $window.alert("Error");
          }
       });

};

//pop up
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

  }]);
myAppCtrl.controller('dashboardCtrl',['$scope','$route','$routeParams', '$location','eCard','alterDollar','$cookies','$anchorScroll','$window','modals','$http',
  function($scope,$route,$routeParams,$location,eCard,alterDollar,$cookies,$anchorScroll,$window,modals,$http){


  $scope.username = $cookies.get('username');


  }]);