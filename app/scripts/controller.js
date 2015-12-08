var myAppCtrl = angular.module('myAppCtrl',[]);

myAppCtrl.controller('cardCtrl',['$routeParams','$scope','eCard','$http','alterDollar', '$location','$anchorScroll','$window','modals',
  function($http,$scope,eCard,$routeParams, alterDollar, $location,$anchorScroll,$window,modals){
 //cover page details   
  $scope.cover=eCard.details();
 //login 
 $scope.master = {};
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
        $scope.master = angular.copy(user);
        $scope.SignInResult = alterDollar.signingIn({username:user.username,password:user.password});
        $scope.SignInResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/homepage';            
          }
          else{
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
    //signUp            
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
      
    $scope.master = angular.copy(signup);
    $scope.signUpResult=alterDollar.signingUp({name:signup.name, username:signup.username, email:signup.email, password:signup.password, phone:signup.phone});
    $scope.signUpResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/homepage';
          }
          else{
            $window.alert("Error");
          }
       });    
 //  }
  };


//redeemption
  $scope.redeem = function(code){
    var redeemResult = {};
    $scope.redeemResult = alterDollar.redeemption({code:code.redeemCode});
    $scope.redeemResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/homepage';
          }
          else{
            $window.alert("Error");
          }
       }); 
  };

//homepage
//$scope.displayCard=1;
$scope.cardDisp = function(){
  $scope.displayCard=1;
};
$scope.customDisp = function(){
  $scope.displayCard=2;
};

$scope.personDisp = function(){
$scope.displayCard =3 ;
};

//select card
  $scope.query=$routeParams.theme;
 // $scope.cards=alterDollar.getCards();
 $scope.cards=alterDollar.getCards();
  $scope.orderProp='id'; 
 
 //display card
 $scope.specificCard = function(card){
  localStorage.setItem('id',card.url);
  localStorage.setItem('cardId',card.card_id);
  $window.location.href='#/cardDetails'
 };
 
 $scope.vijay = localStorage.getItem('id');
 $scope.sai = localStorage.getItem('cardId');

//silder
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

 //payment page
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
      $scope.confirmCardResult = alterDollar.confirmingCard({card_id: $scope.vijay , amount: confirmation.amount, receiver_name: confirmation.name, receiver_email: confirmation.email, receiver_phone: confirmation.phone, message:confirmation.message, delivery_date: confirmation.date});
     $scope.confirmCardResult.$promise.then(function(data) {
          if(data.message=="success"){
            $window.location.href='#/payment';
          }
          else{
            $window.alert("Error");
          }
       });     

  };


//payment
$scope.file = localStorage.getItem('id');
//$scope.payID = localStorage.setItem('payID', 0);

 //var braintree = Braintree.create("MIIBCgKCAQEAp5Qjmc7L1mTGOlVKvJ7x8n5nsB0NG1aeL06CeNeqPwk5oMLCoI7Ay9Kb4YStPPKiBrZf+66oPVdpaA2yRZxyy9sWPCwfE7Hy8CliRx/gbbtyz1nJLOAt1mEFJz2aa3O2s1TkYu+7jorPC5HRAgziSv9HsWf020F0H8ME071zAGTxsmMWzPALzSa8Ur6PRIbl43MaC85n+zvTX7SDVGdqV0d5IVGVTaOWEER00XsZEUW7zlFjWM4RpJbUKXAeez7PifQfnuLWhKD7bKhoJ082Mv+cvDl8poeVyHamVcUnJ5DBB1oXJ2rypcIxyTkTXwpUBvJFN670av3ae2z4ZUhABwIDAQAB")
//$scope.key = alterDollar.getKey();
//var braintree = Braintree.create(key);
//$scope.raghav = raghav;
  $scope.approvePayment = function(payment){

   $scope.paymentSuccess = alterDollar.paymentService();
           $scope.paymentSuccess.$promise.then(function(result) {
          if(result.transaction_status=='success'){
            $window.location.href='#/confirmation';
          }
          else{
            $window.alert("Error");
          }
       }); 
  };

  /*$scope.upload = function() {
    AWS.config.update({ accessKeyId: "AKIAJ7JCTZYHPV3SWA2A", secretAccessKey: "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" });
    AWS.config.region = 'us-west-2';
    var bucket = new AWS.S3({ params: { Bucket: "sjsuraj" } });
    $scope.raghav = raghav;
    
    
   // if($scope.file) {
        // Perform File Size Check First
      //  var fileSize = Math.round(parseInt($scope.file.size));
      //  if (fileSize > $scope.sizeLimit) {
        //  toastr.error('Sorry, your attachment is too big. <br/> Maximum '  + $scope.fileSizeLabel() + ' file attachment allowed','File Too Large');
         // return false;
        //}
        // Prepend Unique String To Prevent Overwrites
        var uniqueFileName = $scope.uniqueString() + '-' + $scope.raghav;

        var params = { Key: uniqueFileName, ContentType: png, Body: $scope.file, ServerSideEncryption: 'AES256' };

        bucket.putObject(params, function(err, data) {
          if(err) {
            toastr.error(err.message,err.code);
            return false;
          }
          else {
            // Upload Successfully Finished
            toastr.success('File Uploaded Successfully', 'Done');

            // Reset The Progress Bar
            setTimeout(function() {
              $scope.uploadProgress = 0;
              $scope.$digest();
            }, 4000);
          }
        })

     // }
    };
    $scope.uniqueString = function() {
    var text     = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }; 
*/
 $scope.upload = function(){
   AWS.config.update({ accessKeyId: 'AKIAJ7JCTZYHPV3SWA2A', secretAccessKey: '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' });
  AWS.config.region = 'us-west-2';
  var bucket = new AWS.S3({ params: { Bucket:" " } });

  var params = { Key: 'sjsuraj/test' };
 
    bucket.getObject(params, function(err, data) {
      if(err) {
        // There Was An Error With Your S3 Config
        alert(err.message);
        return false;
      }
      else {
        // Success!
        alert('Upload Done');
      }
    })

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

var data;

$scope.save = function(){
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
localStorage.setItem('id', image);

$window.location.href='#/cardDetails'
//$scope.displays={image:'image'};
window.location.href = image;

};
//$scope.vijay = localStorage.getItem('id');



$scope.remove = function(){
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
        }
      }; 
/*$scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    }; */




}]);

myAppCtrl.controller('CustomizeCtrl',['$routeParams','$scope','eCard','$http','alterDollar', '$location','$anchorScroll','$window','modals',
  function($http,$scope,eCard,$routeParams, alterDollar, $location,$anchorScroll,$window,modals){
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
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
localStorage.setItem('id', image);
$window.location.href='#/cardDetails'
//$scope.displays={image:'image'};
window.location.href = image;
 
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

        


