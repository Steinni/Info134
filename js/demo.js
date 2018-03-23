//write to console start
function helloConsole() {
console.log("Hello");
}
// write to console end

// innkapsler JSON data som en variabel
var toaletter = [{
	"herre": "1",
	"tid_sondag": "07.00 - 23.15",
	"pissoir_only": "NULL",
	"stellerom": "NULL",
	"latitude": "60.3879681",
	"tid_hverdag": "07.00 - 23.15",
	"plassering": "NONNESETER TERMINAL, SØR",
	"tid_lordag": "07.00 - 23.15",
	"rullestol": "1",
	"adresse": "Lungegårdskaien",
	"pris": "12",
	"id": "1",
	"place": "NONNESETER TERMINAL, SOUTH",
	"dame": "1",
	"longitude": "5.334608"
}, {
	"herre": "1",
	"tid_sondag": "NULL",
	"pissoir_only": "NULL",
	"stellerom": "NULL",
	"latitude": "60.3884988",
	"tid_hverdag": "05.30 - 23.50",
	"plassering": "NONNESETER TERMINAL , NORD",
	"tid_lordag": "07.00 - 23.15",
	"rullestol": "1",
	"adresse": "Østre Strømkai",
	"pris": "12",
	"id": "2",
	"place": "NONNESETER TERMINAL , NORTH",
	"dame": "1",
	"longitude": "5.3345382"
}, {
	"herre": "1",
	"tid_sondag": "NULL",
	"pissoir_only": "NULL",
	"stellerom": "NULL",
	"latitude": "60.388868",
	"tid_hverdag": "09.00 - 17.00",
	"plassering": "SKYSS KUNDESENTER",
	"tid_lordag": "09.00 - 15.00",
	"rullestol": "1",
	"adresse": "Østre Strømkai",
	"pris": "12",
	"id": "3",
	"place": "SKYSS CUSTOMER CENTRE",
	"dame": "1",
	"longitude": "5.3337597"
}, {
	"herre": "1",
	"tid_sondag": "07.00 - 23.00",
	"pissoir_only": "NULL",
	"stellerom": "NULL",
	"latitude": "60.39041",
	"tid_hverdag": "07.00 - 23.00",
	"plassering": "JERNBANESTASJONEN",
	"tid_lordag": "07.00 - 23.00",
	"rullestol": "NULL",
	"adresse": "Strømgaten 4",
	"pris": "10",
	"id": "4",
	"place": "RAILWAY STATION",
	"dame": "1",
	"longitude": "5.332995"
}, {
	"herre": "1",
	"tid_sondag": "08.30 - 22.00",
	"pissoir_only": "NULL",
	"stellerom": "1",
	"latitude": "60.394554",
	"tid_hverdag": "09.00 - 23.00",
	"plassering": "MATHALLEN",
	"tid_lordag": "08.30 - 22.00",
	"rullestol": "1",
	"adresse": "Strandkaien 3",
	"pris": "10",
	"id": "5",
	"place": "FISH MARKET",
	"dame": "1",
	"longitude": "5.324099"
}, {
	"herre": "1",
	"tid_sondag": "08.00 - 18.00",
	"pissoir_only": "NULL",
	"stellerom": "",
	"latitude": "60.3951003",
	"tid_hverdag": "08.00 - 18.00",
	"plassering": "STRANDKAITERMINALEN",
	"tid_lordag": "08.00 - 18.00",
	"rullestol": "",
	"adresse": "Strandkaien",
	"pris": "10",
	"id": "6",
	"place": "STRANDKAI BOAT TERMINAL",
	"dame": "1",
	"longitude": "5.3220606"
}, {
	"herre": "1",
	"tid_sondag": "NULL",
	"pissoir_only": "NULL",
	"stellerom": "NULL",
	"latitude": "60.3913793",
	"tid_hverdag": "08.00 - 15.00",
	"plassering": "BERGEN KOMMUNE, INNBYGGERSERVICE",
	"tid_lordag": "NULL",
	"rullestol": "1",
	"adresse": "Kaigaten 4",
	"pris": "0",
	"id": "7",
	"place": "CITIZEN SERVICE CENTRE",
	"dame": "1",
	"longitude": "5.3290558"
}, {
	"herre": "1",
	"tid_sondag": "NULL",
	"pissoir_only": "NULL",
	"stellerom": "1",
	"latitude": "60.3891105",
	"tid_hverdag": "09.00 - 21.00",
	"plassering": "BERGEN STORSENTER",
	"tid_lordag": "09.00 - 18.00",
	"rullestol": "1",
	"adresse": "Strømgaten 8",
	"pris": "10",
	"id": "8",
	"place": "BERGEN STORSENTER",
	"dame": "1",
	"longitude": "5.3322315"
}, {
	"herre": "1",
	"tid_sondag": "NULL",
	"pissoir_only": "NULL",
	"stellerom": "1",
	"latitude": "60.392209",
	"tid_hverdag": "09.00 - 21.00",
	"plassering": "SUNDT MOTEHUS",
	"tid_lordag": "09.00 - 18.00",
	"rullestol": "1",
	"adresse": "Torgallmenningen 14",
	"pris": "10",
	"id": "9",
	"place": "SUNDT FASHION HOUSE",
	"dame": "1",
	"longitude": "5.324011"
}, {
	"herre": "1",
	"tid_sondag": "NULL",
	"pissoir_only": "NULL",
	"stellerom": "1",
	"latitude": "60.3927098",
	"tid_hverdag": "09.00 - 20.00",
	"plassering": "XHIBITION",
	"tid_lordag": "09.00 - 18.00",
	"rullestol": "1",
	"adresse": "Småstrandgaten 3",
	"pris": "10",
	"id": "10",
	"place": "XHIBITION",
	"dame": "1",
	"longitude": "5.3262019"
}, {
	"herre": "1",
	"tid_sondag": "NULL",
	"pissoir_only": "NULL",
	"stellerom": "1",
	"latitude": "60.3932345",
	"tid_hverdag": "09.00 - 21.00",
	"plassering": "GALLERIET",
	"tid_lordag": "09.00 - 18.00",
	"rullestol": "1",
	"adresse": "Torgallmenningen 8",
	"pris": "10",
	"id": "11",
	"place": "GALLERIET",
	"dame": "1",
	"longitude": "5.3252363"
}, {
	"herre": "1",
	"tid_sondag": "NULL",
	"pissoir_only": "NULL",
	"stellerom": "1",
	"latitude": "60.3944194",
	"tid_hverdag": "10.00 - 20.00",
	"plassering": "KLØVERHUSET",
	"tid_lordag": "10.00 - 18.00",
	"rullestol": "1",
	"adresse": "Strandgaten 13 -15",
	"pris": "10",
	"id": "12",
	"place": "KLØVERHUSET",
	"dame": "1",
	"longitude": "5.3205649"
}, {
	"herre": "1",
	"tid_sondag": "09.00 - 18.00",
	"pissoir_only": "NULL",
	"stellerom": "NULL",
	"latitude": "60.3975913",
	"tid_hverdag": "09.00 - 18.00",
	"plassering": "BRYGGEN BESØKSSENTER",
	"tid_lordag": "09.00 - 18.00",
	"rullestol": "1",
	"adresse": "Jacobsfjorden, Bryggen",
	"pris": "10",
	"id": "13",
	"place": "BRYGGEN VISITOR CENTRE",
	"dame": "1",
	"longitude": "5.3244317"
}, {
	"herre": "NULL",
	"tid_sondag": "ALL",
	"pissoir_only": "1",
	"stellerom": "NULL",
	"latitude": "60.3973581",
	"tid_hverdag": "ALL",
	"plassering": "C. SUNDTSGT",
	"tid_lordag": "ALL",
	"rullestol": "NULL",
	"adresse": "C. Sundts gt",
	"pris": "NULL",
	"id": "14",
	"place": "C. SUNDTSGT",
	"dame": "NULL",
	"longitude": "5.3132629"
}];


/*
En funksjon som lager nummerert liste med plassering på toalettene
- Steinn-Roar Valberg (SVA038)
*/


//Google Map start -Daniel Henstein Olsen (DOL006)
function initialize() {


   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 14,
     center: new google.maps.LatLng(60.395025, 5.325094),
     markers: []
   });






	 	 /* søker igjennom json listen og henter ut posisjonen til toalettene ved
	 	 å bruke latitude og longitude keyvalues
	 	 */
	    for (var i = 0; i < toaletter.length; i++) {
	      var marker = new google.maps.Marker({
	        position: {lat: parseFloat(toaletter[i].latitude), lng: parseFloat(toaletter[i].longitude)},
	        map: map,
	 			 	label: toaletter[i].id, 			// angir en label på markers med IDn til toalettene


	      });

	 		 // gjør markers klikkbare og åpner et infovindu på klikk som forteller toalett ID og plassering
	 		 var infowindow = new google.maps.InfoWindow();
	      google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	          infowindow.setContent(toaletter[i].id + ". " + toaletter[i].plassering);
	          infowindow.open(map, marker);
	        }
	      })(marker, i));
	    }

	 }


//Google Map end


function toalettListe(){
  var liste = document.getElementById("liste");
  liste.innerHTML ="";
for (var i = 0; i < toaletter.length; i++){
  liste.innerHTML += "<ul>" + (i+1) + ". " + toaletter[i].plassering + "</ul>"
}

}
function checkboxToggle(){
	var liste = document.getElementById("checkbox");
	if (liste.style.display === "none"){
		liste.style.display = "flex";
	}
	else {
		liste.style.display = "none";
	}
}

/*
	Funksjonen søker igjennom json variabelen og sjekker om et checkbox er avhuket,
	skal den filtrere json listen og genererer en ny liste basert på det som er avhuket
	-Steinn-Roar Valberg (SVA038), Daniel Henstein Olsen (DOL006)
*/
function checkboxSøk(){
	var json = toaletter;
	var liste = document.getElementById("liste");
	liste.innerHTML= "";

	if (document.getElementById("mann").checked){
		 json = json.filter(toaletter => toaletter.herre != "NULL")
	}
	if (document.getElementById("gratis").checked){
		json = json.filter(toaletter => toaletter.pris == "NULL" || toaletter.pris == "0")
	}
	if (document.getElementById("dame").checked){
		json = json.filter(toaletter => toaletter.dame != "NULL")
	}
	if (document.getElementById("stellerom").checked){
		json = json.filter(toaletter => toaletter.stellerom != "NULL")
	}
	if (document.getElementById("rullestol").checked){
		json = json.filter(toaletter => toaletter.rullestol != "NULL" && toaletter.rullestol != "")
	}
	if (document.getElementById("pissoir").checked){
		json = json.filter(toaletter => toaletter.pissoir_only != "NULL")
	}

	for (var i = 0; i < json.length; i++){
		liste.innerHTML += "<ul>" + (i+1) + ". " + json[i].plassering + "</ul>"


	}

	if (liste.innerHTML == ""){
		liste.innerHTML = "Beklager, ingen treff";
	}

}
