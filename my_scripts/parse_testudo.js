// var json = JSON.stringify(master, undefined, 2);
// var blob = new Blob([json], {type: 'text/plain'});
// document.body.innerHTML = '<a download="master.json" id="downloadlink">Download</a>';
// document.getElementById('downloadlink').href = window.URL.createObjectURL(blob);


var master = {};
var departments = ['AASP', 'AAST', 'AGNR', 'AMSC', 'AMST', 'ANSC', 'ANTH', 'AOSC', 'ARAB', 'ARCH', 'AREC', 'ARHU', 'ARMY', 'ARSC', 'ARTH', 'ARTT', 'ASTR', 'BCHM', 'BIOE', 'BIOL', 'BIOM', 'BIPH', 'BMGT', 'BSCI', 'BSCV', 'BSGC', 'BSOS', 'BSST', 'BUAC', 'BUDT', 'BUFN', 'BULM', 'BUMK', 'BUMO', 'BUSI', 'CBMG', 'CCJS', 'CHBE', 'CHEM', 'CHIN', 'CHPH', 'CLAS', 'CLFS', 'CMLT', 'CMSC', 'COMM', 'CONS', 'CPET', 'CPGH', 'CPMS', 'CPPL', 'CPSA', 'CPSD', 'CPSF', 'CPSG', 'CPSN', 'CPSP', 'CPSS', 'DANC', 'ECON', 'EDCI', 'EDCP', 'EDHD', 'EDHI', 'EDMS', 'EDPS', 'EDSP', 'EDUC', 'ENAE', 'ENCE', 'ENCH', 'ENCO', 'ENEE', 'ENES', 'ENFP', 'ENGL', 'ENMA', 'ENME', 'ENNU', 'ENPM', 'ENPP', 'ENRE', 'ENSE', 'ENSP', 'ENST', 'ENTM', 'ENTS', 'EPIB', 'EXST', 'FILM', 'FIRE', 'FMSC', 'FOLA', 'FREN', 'GEMS', 'GEOG', 'GEOL', 'GERM', 'GREK', 'GVPT', 'HACS', 'HDCC', 'HEBR', 'HEIP', 'HESI', 'HESP', 'HHUM', 'HISP', 'HIST', 'HLSA', 'HLSC', 'HLTH', 'HONR', 'IMMR', 'INAG', 'INFM', 'INST', 'ISRL', 'ITAL', 'JAPN', 'JOUR', 'JWST', 'KNES', 'KORA', 'LARC', 'LASC', 'LATN', 'LBSC', 'LGBT', 'LING', 'MAIT', 'MATH', 'MEES', 'MIEH', 'MLAW', 'MOCB', 'MUED', 'MUSC', 'NACS', 'NFSC', 'NIAV', 'PERS', 'PHIL', 'PHYS', 'PLSC', 'PORT', 'PSYC', 'PUAF', 'RDEV', 'RELS', 'RUSS', 'SLAA', 'SLLC', 'SOCY', 'SPAN', 'SPHL', 'STAT', 'SURV', 'TDPS', 'THET', 'TLPL', 'UMEI', 'UNIV', 'URSP', 'USLT', 'VMSC', 'WMST']

function parseByDepartment(i, level) {
  $.get("https://ntst.umd.edu/soc/search?courseId=" + departments[i] + "&sectionId=&termId=201501&_openSectionsOnly=on&courseLevelFilter=" + level + "&instructor=&teachingCenter=ALL&courseStartCompare=&courseStartHour=&courseStartMin=&courseStartAM=&courseEndHour=&courseEndMin=&courseEndAM=&creditCompare=&credits=&_classDay1=on&_classDay2=on&_classDay3=on&_classDay4=on&_classDay5=on",
    function(response) {
      $(response).find('.course').each(function() {
        var course = $(this).attr('id');
        master[course] = {};        
        master[course]['name'] = $(this).find('.course-title').text();
        master[course]['sections'] = {};

        $(this).find('.section').each(function() {
          var secId = $(this).find('.section-id').text().trim();
          master[course]['sections'][secId] = {};
    
          var instructor = $(this).find('.section-instructor').text();
          master[course]['sections'][secId]['instructor'] = { 'name': instructor };
          master[course]['sections'][secId]['meetings'] = {};

          $(this).find('.class-days-container .row').each(function() {
            var start_time = $(this).find('.class-start-time').text();
            var end_time = $(this).find('.class-end-time').text();
            if (start_time !== "") {
              master[course]['sections'][secId]['meetings'][start_time + "-" + end_time] = $(this).find('.section-days').text().split(/(?=[A-Z])/);
            }
            master[course]['sections'][secId]['location'] = $(this).find('.building-code').text() + $(this).find('.class-room').text();
            master[course]['sections'][secId]['instructor'] = instructor;
          });
        }); 
      }); 
    });
}

for (var i = 0; i < departments.length; i++) { parseByDepartment(i, 'UGRAD'); }
for (var i = 0; i < departments.length; i++) { parseByDepartment(i, 'GRAD'); }

