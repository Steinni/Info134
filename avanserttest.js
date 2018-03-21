//Konstruktør for objekt Toilets som har egenskapene; herre,tid_sondag,pissoir_only,stellerom,latitude,tid_hverdag,plassering,tid_lordag,rullestol,adresse,pris,id,place,dame,longitude
function Toilet(herre,tid_sondag,pissoir_only,stellerom,latitude,tid_hverdag,plassering,tid_lordag,rullestol,adresse,pris,id,place,dame,longitude) {
    this.herre = herre;
    this.tid_sondag = tid_sondag;
    this.pissoir_only = pissoir_only;
    this.stellerom = stellerom;
    this.latitude = latitude;
    this.tid_hverdag = tid_hverdag;
    this.plassering = plassering;
    this.tid_lordag = tid_lordag;
    this.rullestol = rullestol;
    this.adresse= adresse;
    this.pris = pris;
    this.id = id;
    this.place = place;
    this.dame = dame;
    this.longitude = longitude;
}

//Hardkodet søkeobjekt. Funksjonen under vil en person om alle egenskapene matcher.
var searchObject ={herre:"1",tid_sondag:"07.00 - 23.15",pissoir_only:"NULL",stellerom:"NULL",latitude:"60.3879681",tid_hverdag:"07.00 - 23.15",plassering:"NONNESETER TERMINAL, SØR",tid_lordag:"07.00 - 23.15",rullestol:"1",adresse:"Lungegårdskaien",pris:"12",id:"1",place:"NONNESETER TERMINAL, SOUTH",dame:"1",longitude:"5.334608"}

//Oppretter fem toaletter
var toilet0 = new Toilet("1","07.00 - 23.15","NULL","NULL","60.3879681","07.00 - 23.15","NONNESETER TERMINAL, SØR","07.00 - 23.15","1","Lungegårdskaien","12","1","NONNESETER TERMINAL, SOUTH","1","5.334608")
var toilet1 = new Toilet("1","NULL","NULL","NULL","60.3884988","05.30 - 23.50","NONNESETER TERMINAL , NORD","07.00 - 23.15","1","Østre Strømkai","12","2","NONNESETER TERMINAL , NORTH","1","5.3345382"})
var person5 = new Person("John","Luminous",35,"brown");

//Legger toalettene over i en liste.
var toilets = [toilet0];


function search() {
    var searchResults  = [];
    var searchParams = Object.keys(searchObject);
    for(i=0; i < toilets.length; i++) {
        var truthChecker = [] // will contain boolean values "true" for each param checked.
        for(y=0; y < searchParams.length; y++) {
            if(toilets[i][searchParams[y]] == searchObject[searchParams[y]]) {
                truthChecker.push(true);
            }
            if(truthChecker.length == searchParams.length) { //if all params are true, toilet is pushed. ( ͡° ͜ʖ ͡°)
                searchResults.push(toilets[i]);
            }
        }
    }

    console.log(searchResults);
}
