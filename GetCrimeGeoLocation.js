/**
 * @author Kyaw Myint Cho
 */

function Get(yourUrl){
     var Httpreq = new XMLHttpRequest(); // a new request
	Httpreq.open("GET",yourUrl,false);
	Httpreq.send(null);
	return Httpreq.responseText;     
}

function CrimeLocationObject(lat,lon,t,cat)
{
	this.latitude = lat;
	this.longitude = lon;
	this.time = t;
	this.catagory = cat;
}

function GetCrimeGeoLocation(GeoModels)
{
	var latitude = GeoModels.latitude;
	var longitude = GeoModels.longitude;
	var radius = GeoModels.radius;
	
	var urlBeginning = http://data.sfgov.org/resource/gxxq-x39z.json?$where=within_circle(location;
	
	var completeURL;
	//get the latitude, latitude and radius and put into url
	this.getCrimePoints = function getCrimeLocation(latitude,longitude,radius);
	{
		var completeURL = urlBeginning + latitude + longitude + radius);
	}
	
	var resultArray = new Array();
	     
   var json_objs = JSON.parse(Get(completeURL));
      
      for(i = 0; i < json_objs.length;i++)
      {
      	for (var adress in json_objs[i]) {
      
      var latitude = json_obj.x;
      var longitude = json_obj.y;
      var time = json_obj.time;
      var catagory = json_obj.catagory;
      
      a_CrimeLocationObjects = new CrimeLocationObject(latitude,longitude,time,catagory);
      resultArray.append(a_CrimeLocationObjects);
       
   }
   resultArray.append(a_CrimeLocationObjects);
}
return resultArray;
}




