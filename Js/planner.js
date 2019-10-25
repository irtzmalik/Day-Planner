function refreshCalender(hour){
	//Time Stored in Array in 24 hours format
	var time = [9,10,11,12,13,14,15,16,17];
	var amOrpm = "AM";
	var pastPresentFuture = "present";
	for(var i=0;i<time.length;i++){
	
	//Setting Am/Pm
	if(time[i]==12){
	amOrpm = "PM";
	}
	//Conditons to determin the presen, past future classes for the rows
	if(time[i]==hour){
	pastPresentFuture = "present";
	}
	else if(time[i]>hour){
	pastPresentFuture = "future";
	}
	else if(time[i]<hour){
	pastPresentFuture = "past";
	} 
	//from 24 hour to 12 hours
	var twelveHourTime = ((time[i]>12)?time[i]-12:time[i]);
	var task=(localStorage.getItem(twelveHourTime+"")==null)?"":localStorage.getItem(twelveHourTime+"");
	document.getElementById("hour-row-container").innerHTML = document.getElementById("hour-row-container").innerHTML+'<div class="row "> <div class="col-lg-2 hour" > <label><b>'+twelveHourTime+amOrpm+'</b></label> </div> <div class="col-lg-8 '+pastPresentFuture+'">'+((pastPresentFuture=="future")?'<input class="form-control task" type="text" id="'+i+'">':task)+' </div> <div class="col-lg-2 saveBtn" >'+((pastPresentFuture=="future")?' <i class="fa fa-archive" style="padding-right:10%;" onclick="save('+twelveHourTime+','+i+')"></i>':'')+' </div> </div>';
	}
	}
	
 
	

//saving the task against hour
function save(time,row){

if(document.getElementById(row).value!=""){
localStorage.setItem(time,document.getElementById(row).value);
alert("Schedule set for: "+time)
}

}

//funciton for sleep
//const sleep = (milliseconds) => {
 // return new Promise(resolve => setTimeout(resolve, milliseconds))
//}

//function to refresh the schedule view after each hour
const doSomething = async () => { 
  while(true){ 

  //setting Date in jumbotron
 document.getElementById("currentDay").innerHTML = moment().format('dddd,MMMM Do');
  var hour = moment().format("H");
	//Creating the rows
	document.getElementById("hour-row-container").innerHTML ="";
	refreshCalender(hour);
    await sleep(3650);
  }
}
doSomething();
