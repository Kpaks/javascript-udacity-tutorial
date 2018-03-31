/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#main").append(object.name);
$("#main").append(work["position"]);
$("#main").append(education.lastSchool);*/
/*$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});*/

var formattedName = "Felipe Natale";
var formattedRole = "Front End Developer"
var name = HTMLheaderName.replace("%data%",formattedName);
var role = HTMLheaderRole.replace("%data%",formattedRole);

 var bio = {
	"name" : "Felipe Natale",
	"role" : "Dev",
	"contact" : {"number":"+55 (12) 981048064",
				 "location":"Mirassol 66 - São José Dos Campos",
				 "email" : "felipe@gmail.com"
				},
	"pic" : "images/fry.jpg",
	"welcomeMessage" : "welcome",
	"skills" : ["html","css","js"]
};

var work = {
	"jobs" : [
		{
			"employer" : "Embraer",
		 "title" : "Java Dev",
		 "location" : "SJC - Faria Lima",
		 "date" : "feb/2016",
		 "description" : "Dev tools for Business analises"
		},
		{
			"employer" : "Cheetah",
		 "title" : "Java Dev",
		 "location" : "Itajubá",
		 "date" : "feb/2016",
		 "description" : "IT Member"	
		}

	]};

var projects = {
	"projects" : [
			{"title": "EPS",
 			 "dates": "ago/2015",
 			 "description" : "Laboratory automation",
 			 "imgs" : []
			},
			{
			 "title": "Cheetah Racing",
 			 "dates": "2 years",
 			 "description" : "IT Leader",
 			 "imgs" : []
			},
			{
			 "title": "Robotics Research",
 			 "dates": "2 months",
 			 "description" : "Robotics Modeling",
 			 "imgs" : []	
			}
	]
};

var education = {
	"schools" : [
		{"name" : "Unifei",
		 "major" : ["ComEng"],
		 "minors" : "electric",
		 "degreeYears" : "1", 
		 "location" : "itajuba"
		},
		{
		 "name" : "Obuda",
		 "major" : ["ComEng"],
		 "minors" : "electric",
		 "degreeYears" : "1",
		 "location" : "Budapest"
		}],

	"onlineCourses" : [
		{"title" : "Front Dev",
		 "school" : "Udacity",
		 "dates" : "sep/2016",
		 "degreeYears" : "1" 
		}]	

};
education["lastSchool"] = "Unifei";
education["lastSchoolYears"] = "5";
education["lastSchoolCity"] = "Itajuba";

$("#header").append(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(role); 
$("#header").append(HTMLbioPic.replace("%data%",bio.pic)); 
$("#header").append(HTMLmobile.replace("%data%",bio.contact.number));
$("#header").append(HTMLemail.replace("%data%",bio.contact.email)); 
$("#main").append(internationalizeButton);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(i in bio.skills){
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
	$("#skills").append(formattedSkill);
	}
};


var displayWork = function(){
	if(work.jobs.length > 0){
		for( val in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmp = HTMLworkEmployer.replace("%data%",work.jobs[val].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[val].title);  
			var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[val].description);  
			var formattedLocal = HTMLworkLocation.replace("%data%",work.jobs[val].location); 
			var formattedDate = HTMLworkDates.replace("%data%",work.jobs[val].date);
			$(".work-entry:last").append(formattedEmp+formattedTitle);
			$(".work-entry:last").append(formattedLocal);
			$(".work-entry:last").append(formattedDate);
			$(".work-entry:last").append(formattedDesc);
		}
	}
};
displayWork();


function inName(name){
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];	
}

projects.display = function(){
	if(projects.projects.length > 0){
		for( val in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[val].title);
			var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[val].dates);  
			var formattedDesc = HTMLprojectDescription.replace("%data%",projects.projects[val].description);  
			
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDate);
			$(".project-entry:last").append(formattedDesc);
		}
	}

}

projects.display();
$("#mapDiv").append(googleMap);