var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'Im the Punisher.', duration: 1000}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you hangry fool??',  // message
        dialogDismissed,         // callback
        'One batch, Two batch, Penny and Dime!',            // title
        ['Hell yeah mo fu****!', 'Hell no mo fu****']// buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "I will kill you", duration: 5000});
   	else if(buttonIndex==2) new Toast({content: 'I will find you', duration: 5000});

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 10); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"I'm Frank Castle. Im the Punisher",
        message: 	"I'll find them all, you hear me, I'll kill em all",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}