var myAppServices = angular.module('myAppServices', ['ngResource']);

myAppServices.factory('eCard', ['$resource',
  function($resource){
    return $resource('http://localhost:3000/:data/:actualcall/:file', {}, {
      details: {method:'GET', params:{data:'data',file:'coverpage.json'} },
      signingUp:{method:'GET', params:{actualcall:'signup?name=raj&&email=r@r.com&&password=abc&&phone=111'}},
      card: {method:'GET', params:{data:'data',file:'cards.json'}, isArray:true},
      slides: {method:'GET', params:{data:'data',file:'slides.json'}, isArray:true},
      display: {method:'GET', params:{data:'data',file:'newyear.json'} },
      personalize : {method:'GET', params:{data:'data',file:'personalize.json'}, isArray:true}
    });
  }]);
/*
myAppServices.factory('alterDollar', ['$resource',
  function($resource){
    return $resource('localhost:3000/:actualcall/:file.json', {}, {      
      singingUp : {method:'GET', params:{actualcall:'signup',file:'@file'}, }
    });
  }]);*/




myAppServices.service(
            'modals',['$rootScope','$q',
            function( $rootScope, $q ) {
                // I represent the currently active modal window instance.
                var modal = {
                    deferred: null,
                    params: null
                };
                // Return the public API.
                return({
                    open: open,
                    params: params,
                    proceedTo: proceedTo,
                    reject: reject,
                    resolve: resolve
                });
                // ---
                // PULBIC METHODS.s
                // ---
                // I open a modal of the given type, with the given params. If a modal
                // window is already open, you can optionally pipe the response of the
                // new modal window into the response of the current (cum previous) modal
                // window. Otherwise, the current modal will be rejected before the new
                // modal window is opened.
                function open( type, params, pipeResponse ) {
                    var previousDeferred = modal.deferred;
                    // Setup the new modal instance properties.
                    modal.deferred = $q.defer();
                    modal.params = params;
                    // We're going to pipe the new window response into the previous
                    // window's deferred value.
                    if ( previousDeferred && pipeResponse ) {
                        modal.deferred.promise
                            .then( previousDeferred.resolve, previousDeferred.reject )
                        ;
                    // We're not going to pipe, so immediately reject the current window.
                    } else if ( previousDeferred ) {
                        previousDeferred.reject();
                    }
                    // Since the service object doesn't (and shouldn't) have any direct
                    // reference to the DOM, we are going to use events to communicate
                    // with a directive that will help manage the DOM elements that
                    // render the modal windows.
                    // --
                    // NOTE: We could have accomplished this with a $watch() binding in
                    // the directive; but, that would have been a poor choice since it
                    // would require a chronic watching of acute application events.
                    $rootScope.$emit( "modals.open", type );
                    return( modal.deferred.promise );
                }
                // I return the params associated with the current params.
                function params() {
                    return( modal.params || {} );
                }
                // I open a modal window with the given type and pipe the new window's
                // response into the current window's response without rejecting it
                // outright.
                // --
                // This is just a convenience method for .open() that enables the
                // pipeResponse flag; it helps to make the workflow more intuitive.
                function proceedTo( type, params ) {
                    return( open( type, params, true ) );
                }
                // I reject the current modal with the given reason.
                function reject( reason ) {
                    if ( ! modal.deferred ) {
                        return;
                    }
                    modal.deferred.reject( reason );
                    modal.deferred = modal.params = null;
                    // Tell the modal directive to close the active modal window.
                    $rootScope.$emit( "modals.close" );
                }
                // I resolve the current modal with the given response.
                function resolve( response ) {
                    if ( ! modal.deferred ) {
                        return;
                    }
                    modal.deferred.resolve( response );
                    modal.deferred = modal.params = null;
                    // Tell the modal directive to close the active modal window.
                    $rootScope.$emit( "modals.close" );
                }
            }]);
        // I manage the views that are required to render the modal windows. I don't
        // actually define the modals in anyway - I simply decide which DOM sub-tree
        // should be linked. The means by which the modal window is defined is
        // entirely up to the developer.