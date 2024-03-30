import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.service';
import { Todo } from '../interfaces/todo.service';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  users: User[] = [
      {
        "id":1,
        "firstName":"Terry",
        "lastName":"Medhurst",
        "email":"atuny0@sohu.com",
        "image":"https://robohash.org/hicveldicta.png",
        "title":"Help Desk Operator",
        "todos": []
      },
      {
        "id":2,
        "firstName":"Sheldon",
        "lastName":"Quigley",
        "email":"hbingley1@plala.or.jp",
        "image":"https://robohash.org/doloremquesintcorrupti.png",
        "title":"Senior Cost Accountant",
        "todos": []
      },
      {
        "id":3,
        "firstName":"Terrill",
        "lastName":"Hills",
        "email":"rshawe2@51.la",
        "image":"https://robohash.org/consequunturautconsequatur.png",
        "title":"Mechanical Systems Engineer",
        "todos": []
      },
      {
        "id":4,
        "firstName":"Miles",
        "lastName":"Cummerata",
        "email":"yraigatt3@nature.com",
        "image":"https://robohash.org/facilisdignissimosdolore.png",
        "title":"Paralegal",
        "todos": []
      },
      {
        "id":5,
        "firstName":"Mavis",
        "lastName":"Schultz",
        "email":"kmeus4@upenn.edu",
        "image":"https://robohash.org/adverovelit.png",
        "title":"Web Developer I",
        "todos": []
      },
      {
        "id":6,
        "firstName":"Alison",
        "lastName":"Reichert",
        "email":"jtreleven5@nhs.uk",
        "image":"https://robohash.org/laboriosamfacilisrem.png",
        "title":"Civil Engineer",
        "todos": []
      },
      {
        "id":7,
        "firstName":"Oleta",
        "lastName":"Abbott",
        "email":"dpettegre6@columbia.edu",
        "image":"https://robohash.org/cupiditatererumquos.png",
        "title":"Sales Associate",
        "todos": []
      },
      {
        "id":8,
        "firstName":"Ewell",
        "lastName":"Mueller",
        "email":"ggude7@chron.com",
        "image":"https://robohash.org/quiaharumsapiente.png",
        "title":"Clinical Specialist",
        "todos": []
      },
      {
        "id":9,
        "firstName":"Demetrius",
        "lastName":"Corkery",
        "email":"nloiterton8@aol.com",
        "image":"https://robohash.org/excepturiiuremolestiae.png",
        "title":"Community Outreach Specialist",
        "todos": []
      },
      {
        "id":10,
        "firstName":"Eleanora",
        "lastName":"Price",
        "email":"umcgourty9@jalbum.net",
        "image":"https://robohash.org/aliquamcumqueiure.png",
        "title":"Senior Sales Associate",
        "todos": []
      },
      {
        "id":11,
        "firstName":"Marcel",
        "lastName":"Jones",
        "email":"acharlota@liveinternet.ru",
        "image":"https://robohash.org/impeditautest.png",
        "title":"Account Executive",
        "todos": []
      },
      {
        "id":12,
        "firstName":"Assunta",
        "lastName":"Rath",
        "email":"rhallawellb@dropbox.com",
        "image":"https://robohash.org/namquaerataut.png",
        "title":"Developer II",
        "todos": []
      },
      {
        "id":13,
        "firstName":"Trace",
        "lastName":"Douglas",
        "email":"lgribbinc@posterous.com",
        "image":"https://robohash.org/voluptatemsintnulla.png",
        "title":"Sales Associate",
        "todos": []
      },
      {
        "id":14,
        "firstName":"Enoch",
        "lastName":"Lynch",
        "email":"mturleyd@tumblr.com",
        "image":"https://robohash.org/quisequienim.png",
        "title":"Professor",
        "todos": []
      },
      {
        "id":15,
        "firstName":"Jeanne",
        "lastName":"Halvorson",
        "email":"kminchelle@qq.com",
        "image":"https://robohash.org/autquiaut.png",
        "title":"Software Test Engineer IV",
        "todos": []
      },
      {
        "id":16,
        "firstName":"Trycia",
        "lastName":"Fadel",
        "email":"dpierrof@vimeo.com",
        "image":"https://robohash.org/porronumquamid.png",
        "title":"Geological Engineer",
        "todos": []
      },
      {
        "id":17,
        "firstName":"Bradford",
        "lastName":"Prohaska",
        "email":"vcholdcroftg@ucoz.com",
        "image":"https://robohash.org/accusantiumvoluptateseos.png",
        "title":"Operator",
        "todos": []
      },
      {
        "id":18,
        "firstName":"Arely",
        "lastName":"Skiles",
        "email":"sberminghamh@chron.com",
        "image":"https://robohash.org/nihilharumqui.png",
        "title":"VP Accounting",
        "todos": []
      },
      {
        "id":19,
        "firstName":"Gust",
        "lastName":"Purdy",
        "email":"bleveragei@so-net.ne.jp",
        "image":"https://robohash.org/delenitipraesentiumvoluptatum.png",
        "title":"Financial Analyst",
        "todos": []
      },
      {
        "id":20,
        "firstName":"Lenna",
        "lastName":"Renner",
        "email":"aeatockj@psu.edu",
        "image":"https://robohash.org/ipsumutofficiis.png",
        "title":"Geologist III",
        "todos": []
      },
      {
        "id":21,
        "firstName":"Doyle",
        "lastName":"Ernser",
        "email":"ckensleyk@pen.io",
        "image":"https://robohash.org/providenttemporadelectus.png",
        "title":"Programmer Analyst I",
        "todos": []
      },
      {
        "id":22,
        "firstName":"Tressa",
        "lastName":"Weber",
        "email":"froachel@howstuffworks.com",
        "image":"https://robohash.org/temporarecusandaeest.png",
        "title":"VP Quality Control",
        "todos": []
      },
      {
        "id":23,
        "firstName":"Felicity",
        "lastName":"O'Reilly",
        "email":"beykelhofm@wikispaces.com",
        "image":"https://robohash.org/odioquivero.png",
        "title":"Assistant Manager",
        "todos": []
      },
      {
        "id":24,
        "firstName":"Jocelyn",
        "lastName":"Schuster",
        "email":"brickeardn@fema.gov",
        "image":"https://robohash.org/odiomolestiaealias.png",
        "title":"Research Nurse",
        "todos": []
      },
      {
        "id":25,
        "firstName":"Edwina",
        "lastName":"Ernser",
        "email":"dfundello@amazon.co.jp",
        "image":"https://robohash.org/doloremautdolores.png",
        "title":"Cost Accountant",
        "todos": []
      },
      {
        "id":26,
        "firstName":"Griffin",
        "lastName":"Braun",
        "email":"lgronaverp@cornell.edu",
        "image":"https://robohash.org/laboriosammollitiaut.png",
        "title":"Senior Cost Accountant",
        "todos": []
      },
      {
        "id":27,
        "firstName":"Piper",
        "lastName":"Schowalter",
        "email":"fokillq@amazon.co.jp",
        "image":"https://robohash.org/nequeodiosapiente.png",
        "title":"Sales Representative",
        "todos": []
      },
      {
        "id":28,
        "firstName":"Kody",
        "lastName":"Terry",
        "email":"xisherwoodr@ask.com",
        "image":"https://robohash.org/consequunturabnon.png",
        "title":"Recruiting Manager",
        "todos": []
      },
      {
        "id":29,
        "firstName":"Macy",
        "lastName":"Greenfelder",
        "email":"jissetts@hostgator.com",
        "image":"https://robohash.org/amettemporeea.png",
        "title":"Structural Analysis Engineer",
        "todos": []
      },
      {
        "id":30,
        "firstName":"Maurine",
        "lastName":"Stracke",
        "email":"kdulyt@umich.edu",
        "image":"https://robohash.org/perferendisideveniet.png",
        "title":"Quality Engineer",
        "todos": []
      },
      {
        "id":31,
        "firstName":"Luciano",
        "lastName":"Sauer",
        "email":"smargiottau@altervista.org",
        "image":"https://robohash.org/rerumfugiatamet.png",
        "title":"Research Associate",
        "todos": []
      },
      {
        "id":32,
        "firstName":"Kaya",
        "lastName":"Emard",
        "email":"lskeelv@webeden.co.uk",
        "image":"https://robohash.org/etquiquibusdam.png",
        "title":"Help Desk Technician",
        "todos": []
      },
      {
        "id":33,
        "firstName":"Lee",
        "lastName":"Schmidt",
        "email":"gsilcockw@infoseek.co.jp",
        "image":"https://robohash.org/providentdoloremarchitecto.png",
        "title":"Associate Professor",
        "todos": []
      },
      {
        "id":34,
        "firstName":"Darien",
        "lastName":"Witting",
        "email":"aaughtonx@businessweek.com",
        "image":"https://robohash.org/utnonnobis.png",
        "title":"Structural Analysis Engineer",
        "todos": []
      },
      {
        "id":35,
        "firstName":"Jacklyn",
        "lastName":"Schimmel",
        "email":"mbrooksbanky@gnu.org",
        "image":"https://robohash.org/nequeexercitationemanimi.png",
        "title":"Sales Representative",
        "todos": []
      },
      {
        "id":36,
        "firstName":"Angelica",
        "lastName":"Baumbach",
        "email":"dalmondz@joomla.org",
        "image":"https://robohash.org/vitaenonqui.png",
        "title":"Physical Therapy Assistant",
        "todos": []
      },
      {
        "id":37,
        "firstName":"Delfina",
        "lastName":"Ziemann",
        "email":"nwytchard10@blogspot.com",
        "image":"https://robohash.org/officiisprovidentlaborum.png",
        "title":"Marketing Assistant",
        "todos": []
      },
      {
        "id":38,
        "firstName":"Thaddeus",
        "lastName":"McCullough",
        "email":"igannan11@microsoft.com",
        "image":"https://robohash.org/veritatisperspiciatisqui.png",
        "title":"Sales Representative",
        "todos": []
      },
      {
        "id":39,
        "firstName":"Salvatore",
        "lastName":"Fisher",
        "email":"lgherardi12@washington.edu",
        "image":"https://robohash.org/quosautquia.png",
        "title":"Director of Sales",
        "todos": []
      },
      {
        "id":40,
        "firstName":"Jasmin",
        "lastName":"Hermiston",
        "email":"lgutridge13@sun.com",
        "image":"https://robohash.org/voluptatesolutaconsequuntur.png",
        "title":"Payment Adjustment Coordinator",
        "todos": []
      },
      {
        "id":41,
        "firstName":"Nicklaus",
        "lastName":"Cruickshank",
        "email":"cslateford14@blogspot.com",
        "image":"https://robohash.org/quiaconsecteturaut.png",
        "title":"Compensation Analyst",
        "todos": []
      },
      {
        "id":42,
        "firstName":"Tiara",
        "lastName":"Rolfson",
        "email":"mhaslegrave15@springer.com",
        "image":"https://robohash.org/perferendisestanimi.png",
        "title":"Chief Design Engineer",
        "todos": []
      },
      {
        "id":43,
        "firstName":"Garret",
        "lastName":"Klocko",
        "email":"kbrecknock16@marriott.com",
        "image":"https://robohash.org/amaioresqui.png",
        "title":"Sales Representative",
        "todos": []
      },
      {
        "id":44,
        "firstName":"Reginald",
        "lastName":"Wisoky",
        "email":"rlaxe17@tamu.edu",
        "image":"https://robohash.org/vitaeharumquia.png",
        "title":"Assistant Professor",
        "todos": []
      },
      {
        "id":45,
        "firstName":"Humberto",
        "lastName":"Botsford",
        "email":"pidill18@china.com.cn",
        "image":"https://robohash.org/liberoquaeratquidem.png",
        "title":"Accountant III",
        "todos": []
      },
      {
        "id":46,
        "firstName":"Justus",
        "lastName":"Sipes",
        "email":"rmcritchie19@topsy.com",
        "image":"https://robohash.org/veritatismodiest.png",
        "title":"Media Manager IV",
        "todos": []
      },
      {
        "id":47,
        "firstName":"Coralie",
        "lastName":"Boyle",
        "email":"rlangston1a@51.la",
        "image":"https://robohash.org/quivoluptatepraesentium.png",
        "title":"Professor",
        "todos": []
      },
      {
        "id":48,
        "firstName":"Felicita",
        "lastName":"Gibson",
        "email":"jevanson1b@admin.ch",
        "image":"https://robohash.org/numquamcumquereiciendis.png",
        "title":"Professor",
        "todos": []
      },
      {
        "id":49,
        "firstName":"Pearl",
        "lastName":"Blick",
        "email":"ssarjant1c@statcounter.com",
        "image":"https://robohash.org/etnemoet.png",
        "title":"Account Representative I",
        "todos": []
      },
      {
        "id":50,
        "firstName":"Johnathon",
        "lastName":"Predovic",
        "email":"xlinster1d@bravesites.com",
        "image":"https://robohash.org/nisietqui.png",
        "title":"Assistant Professor",
        "todos": []
      },
      {
        "id":51,
        "firstName":"Jerry",
        "lastName":"Kertzmann",
        "email":"tmullender1e@scientificamerican.com",
        "image":"https://robohash.org/aliquideosquidem.png",
        "title":"Executive Secretary",
        "todos": []
      },
      {
        "id":52,
        "firstName":"Elbert",
        "lastName":"Gottlieb",
        "email":"gmein1f@nasa.gov",
        "image":"https://robohash.org/omnisipsasit.png",
        "title":"Project Manager",
        "todos": []
      },
      {
        "id":53,
        "firstName":"Sincere",
        "lastName":"Mueller",
        "email":"gmaccumeskey1g@buzzfeed.com",
        "image":"https://robohash.org/minimaquamcorrupti.png",
        "title":"Graphic Designer",
        "todos": []
      },
      {
        "id":54,
        "firstName":"Telly",
        "lastName":"Spinka",
        "email":"bpetts1h@smugmug.com",
        "image":"https://robohash.org/quianonquia.png",
        "title":"Compensation Analyst",
        "todos": []
      },
      {
        "id":55,
        "firstName":"Hal",
        "lastName":"Keebler",
        "email":"ajozef1i@usatoday.com",
        "image":"https://robohash.org/animiautillo.png",
        "title":"Librarian",
        "todos": []
      },
      {
        "id":56,
        "firstName":"Megane",
        "lastName":"Armstrong",
        "email":"oyakushkev1j@oracle.com",
        "image":"https://robohash.org/voluptatemexplicaboasperiores.png",
        "title":"Physical Therapy Assistant",
        "todos": []
      },
      {
        "id":57,
        "firstName":"Toy",
        "lastName":"Olson",
        "email":"bpickering1k@clickbank.net",
        "image":"https://robohash.org/eumestdolor.png",
        "title":"Recruiting Manager",
        "todos": []
      },
      {
        "id":58,
        "firstName":"Deanna",
        "lastName":"Glover",
        "email":"nworley1l@thetimes.co.uk",
        "image":"https://robohash.org/porroaccusamuseveniet.png",
        "title":"Account Executive",
        "todos": []
      },
      {
        "id":59,
        "firstName":"Marcella",
        "lastName":"Shanahan",
        "email":"klife1m@i2i.jp",
        "image":"https://robohash.org/eaipsaaliquam.png",
        "title":"Account Coordinator",
        "todos": []
      },
      {
        "id":60,
        "firstName":"Rachel",
        "lastName":"Jacobson",
        "email":"dlambarth1n@blinklist.com",
        "image":"https://robohash.org/doloremtemporamolestiae.png",
        "title":"Help Desk Technician",
        "todos": []
      },
      {
        "id":61,
        "firstName":"Nora",
        "lastName":"Sawayn",
        "email":"cepgrave1o@biblegateway.com",
        "image":"https://robohash.org/corporisvoluptatumdicta.png",
        "title":"Senior Cost Accountant",
        "todos": []
      },
      {
        "id":62,
        "firstName":"Mozell",
        "lastName":"O'Connell",
        "email":"mpoyner1p@google.co.uk",
        "image":"https://robohash.org/sintsequitenetur.png",
        "title":"Payment Adjustment Coordinator",
        "todos": []
      },
      {
        "id":63,
        "firstName":"Nasir",
        "lastName":"Leuschke",
        "email":"eburras1q@go.com",
        "image":"https://robohash.org/dignissimosplaceatet.png",
        "title":"Technical Writer",
        "todos": []
      },
      {
        "id":64,
        "firstName":"Quinn",
        "lastName":"Witting",
        "email":"gfernandes1r@virginia.edu",
        "image":"https://robohash.org/distinctioullamsaepe.png",
        "title":"Financial Advisor",
        "todos": []
      },
      {
        "id":65,
        "firstName":"Jeanne",
        "lastName":"O'Keefe",
        "email":"hollet1s@trellian.com",
        "image":"https://robohash.org/reprehenderitquisanimi.png",
        "title":"Legal Assistant",
        "todos": []
      },
      {
        "id":66,
        "firstName":"Terrence",
        "lastName":"Koelpin",
        "email":"hfasey1t@home.pl",
        "image":"https://robohash.org/facilisomnisvoluptatem.png",
        "title":"Software Consultant",
        "todos": []
      },
      {
        "id":67,
        "firstName":"Davonte",
        "lastName":"Heaney",
        "email":"gbarhams1u@cnet.com",
        "image":"https://robohash.org/ipsadistinctiovero.png",
        "title":"Speech Pathologist",
        "todos": []
      },
      {
        "id":68,
        "firstName":"Everette",
        "lastName":"Prohaska",
        "email":"rstrettle1v@globo.com",
        "image":"https://robohash.org/cumquesedrem.png",
        "title":"Sales Associate",
        "todos": []
      },
      {
        "id":69,
        "firstName":"Oda",
        "lastName":"Schmidt",
        "email":"btegler1w@elegantthemes.com",
        "image":"https://robohash.org/asperioressolutaet.png",
        "title":"Programmer Analyst IV",
        "todos": []
      },
      {
        "id":70,
        "firstName":"Twila",
        "lastName":"Padberg",
        "email":"cmasurel1x@baidu.com",
        "image":"https://robohash.org/quiaeaquefacere.png",
        "title":"Administrative Assistant II",
        "todos": []
      },
      {
        "id":71,
        "firstName":"Amelia",
        "lastName":"Mann",
        "email":"omarsland1y@washingtonpost.com",
        "image":"https://robohash.org/voluptassimiliqueet.png",
        "title":"Biostatistician IV",
        "todos": []
      },
      {
        "id":72,
        "firstName":"Frederique",
        "lastName":"Boehm",
        "email":"mcrumpe1z@techcrunch.com",
        "image":"https://robohash.org/doloremqueatqueet.png",
        "title":"Food Chemist",
        "todos": []
      },
      {
        "id":73,
        "firstName":"Clotilde",
        "lastName":"Larson",
        "email":"wfeldon20@netlog.com",
        "image":"https://robohash.org/estipsamincidunt.png",
        "title":"Professor",
        "todos": []
      },
      {
        "id":74,
        "firstName":"Moriah",
        "lastName":"Mills",
        "email":"ahinckes21@google.es",
        "image":"https://robohash.org/voluptatemdolorumvel.png",
        "title":"Analyst Programmer",
        "todos": []
      },
      {
        "id":75,
        "firstName":"Claudia",
        "lastName":"Dooley",
        "email":"ptilson22@360.cn",
        "image":"https://robohash.org/idvoluptatemrepellendus.png",
        "title":"Junior Executive",
        "todos": []
      },
      {
        "id":76,
        "firstName":"Deon",
        "lastName":"Gutkowski",
        "email":"cgaber23@prlog.org",
        "image":"https://robohash.org/authicnon.png",
        "title":"Account Coordinator",
        "todos": []
      },
      {
        "id":77,
        "firstName":"Amos",
        "lastName":"Weimann",
        "email":"rkingswood24@usa.gov",
        "image":"https://robohash.org/quasialiquidrerum.png",
        "title":"Registered Nurse",
        "todos": []
      },
      {
        "id":78,
        "firstName":"Frankie",
        "lastName":"Hudson",
        "email":"dbuist25@hao123.com",
        "image":"https://robohash.org/voluptaseligendiaut.png",
        "title":"Design Engineer",
        "todos": []
      },
      {
        "id":79,
        "firstName":"Harrison",
        "lastName":"Lemke",
        "email":"pmoraleda26@symantec.com",
        "image":"https://robohash.org/hicadipisciodio.png",
        "title":"GIS Technical Architect",
        "todos": []
      },
      {
        "id":80,
        "firstName":"Guy",
        "lastName":"Franecki",
        "email":"vkohrt27@hostgator.com",
        "image":"https://robohash.org/quaeratpariaturet.png",
        "title":"Financial Analyst",
        "todos": []
      },
      {
        "id":81,
        "firstName":"Sidney",
        "lastName":"Rutherford",
        "email":"capplewhite28@nationalgeographic.com",
        "image":"https://robohash.org/dolorumdelenitinon.png",
        "title":"Senior Editor",
        "todos": []
      },
      {
        "id":82,
        "firstName":"Maymie",
        "lastName":"Yundt",
        "email":"kogilvy29@blogtalkradio.com",
        "image":"https://robohash.org/providentquiaaut.png",
        "title":"Nurse Practicioner",
        "todos": []
      },
      {
        "id":83,
        "firstName":"Rita",
        "lastName":"Shields",
        "email":"gconford2a@wordpress.com",
        "image":"https://robohash.org/sapientelaborumminima.png",
        "title":"Registered Nurse",
        "todos": []
      },
      {
        "id":84,
        "firstName":"Aniya",
        "lastName":"Wisozk",
        "email":"dmantle2b@reuters.com",
        "image":"https://robohash.org/aliasiurenam.png",
        "title":"Speech Pathologist",
        "todos": []
      },
      {
        "id":85,
        "firstName":"Angelica",
        "lastName":"Metz",
        "email":"kpondjones2c@nsw.gov.au",
        "image":"https://robohash.org/atetsit.png",
        "title":"Design Engineer",
        "todos": []
      },
      {
        "id":86,
        "firstName":"Rupert",
        "lastName":"Upton",
        "email":"whuman2d@hp.com",
        "image":"https://robohash.org/mollitiasimiliqueneque.png",
        "title":"Cost Accountant",
        "todos": []
      },
      {
        "id":87,
        "firstName":"Eleazar",
        "lastName":"Torp",
        "email":"fschlagman2e@deliciousdays.com",
        "image":"https://robohash.org/facerealiquidexercitationem.png",
        "title":"Account Representative II",
        "todos": []
      },
      {
        "id":88,
        "firstName":"Anais",
        "lastName":"Yundt",
        "email":"agreenhouse2f@mashable.com",
        "image":"https://robohash.org/laborumvoluptatibusnulla.png",
        "title":"Quality Control Specialist",
        "todos": []
      },
      {
        "id":89,
        "firstName":"Gayle",
        "lastName":"Krajcik",
        "email":"cdwyr2g@shop-pro.jp",
        "image":"https://robohash.org/inventoredelenitiquas.png",
        "title":"Librarian",
        "todos": []
      },
      {
        "id":90,
        "firstName":"Wilma",
        "lastName":"Hickle",
        "email":"omottley2h@hugedomains.com",
        "image":"https://robohash.org/minimadoloreslaborum.png",
        "title":"Environmental Specialist",
        "todos": []
      },
      {
        "id":91,
        "firstName":"Arne",
        "lastName":"Jacobs",
        "email":"hyaknov2i@hhs.gov",
        "image":"https://robohash.org/necessitatibusvoluptatemvero.png",
        "title":"Automation Specialist I",
        "todos": []
      },
      {
        "id":92,
        "firstName":"Emely",
        "lastName":"Schmitt",
        "email":"clambol2j@bloglovin.com",
        "image":"https://robohash.org/cumqueharumsunt.png",
        "title":"Executive Secretary",
        "todos": []
      },
      {
        "id":93,
        "firstName":"Fabiola",
        "lastName":"Oberbrunner",
        "email":"dduggan2k@simplemachines.org",
        "image":"https://robohash.org/undeutveritatis.png",
        "title":"Quality Engineer",
        "todos": []
      },
      {
        "id":94,
        "firstName":"Kari",
        "lastName":"Schinner",
        "email":"jtossell2l@drupal.org",
        "image":"https://robohash.org/quisquamhicin.png",
        "title":"Paralegal",
        "todos": []
      },
      {
        "id":95,
        "firstName":"Rory",
        "lastName":"Conn",
        "email":"cchomiszewski2m@cbsnews.com",
        "image":"https://robohash.org/autcommodivoluptas.png",
        "title":"Help Desk Operator",
        "todos": []
      },
      {
        "id":96,
        "firstName":"Cristobal",
        "lastName":"Watsica",
        "email":"bgoby2n@washingtonpost.com",
        "image":"https://robohash.org/deseruntfaciliset.png",
        "title":"Physical Therapy Assistant",
        "todos": []
      },
      {
        "id":97,
        "firstName":"Allene",
        "lastName":"Harber",
        "email":"cdavydochkin2o@globo.com",
        "image":"https://robohash.org/adipiscisiteius.png",
        "title":"Structural Analysis Engineer",
        "todos": []
      },
      {
        "id":98,
        "firstName":"Lempi",
        "lastName":"Runte",
        "email":"zstenning2p@list-manage.com",
        "image":"https://robohash.org/estetlaudantium.png",
        "title":"Registered Nurse",
        "todos": []
      },
      {
        "id":99,
        "firstName":"Terrell",
        "lastName":"Schuppe",
        "email":"flesslie2q@google.nl",
        "image":"https://robohash.org/maioresethic.png",
        "title":"Senior Quality Engineer",
        "todos": []
      },
      {
        "id":100,
        "firstName":"Tevin",
        "lastName":"Prohaska",
        "email":"pcumbes2r@networkadvertising.org",
        "image":"https://robohash.org/eosvoluptasquia.png",
        "title":"VP Sales",
        "todos": []
      }
    ]

    constructor() {
      this.user = {
        todos: [],
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        image: '',
        title: '',
      };
    }

    getTodos() {
      if (this.user) {
        return this.user.todos;
      } else {
        console.error('User is not defined!');
        return [];
      }
    }

    addTodo(todo: Todo) {
      if (this.user) {
        this.user.todos.push(todo);
      } else {
        console.error('User is not defined!');
      }
    }

    getAllUsers(): User[] {
      return this.users;
    }

    getUserById(id: number): User | undefined {
      return this.users.find(user => user.id === id);
    }
  }
