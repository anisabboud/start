// var schema = {
//   'course': {
//       'name': "",
//       'sections': {
//           'section': {
//             'location': "",
//             'meetings': {
//                 'start_time': "",
//                 'end_time' : "",
//                 'days': []
//             }
//           } 
//       },
//       'instructors': {
//           'instructor': {
//               'location': "",
//               'email': "",
//               'meetings': {
//                 'start_time': "",
//                 'end_time' : "",
//                 'days': []
//             }
//           } 
//       },
//   },

// };


// var json = JSON.stringify(master, undefined, 2);
// var blob = new Blob([json], {type: 'text/plain'});
// document.body.innerHTML = '<a download="master.json" id="downloadlink">Download</a>';
// document.getElementById('downloadlink').href = window.URL.createObjectURL(blob);


var master = {};

var departments = ['AASP', 'AAST', 'AGNR', 'AMSC', 'AMST', 'ANSC', 'ANTH', 'AOSC', 'ARAB', 'ARCH', 'AREC', 'ARHU', 'ARMY', 'ARSC', 'ARTH', 'ARTT', 'ASTR', 'BCHM', 'BIOE', 'BIOL', 'BIOM', 'BIPH', 'BMGT', 'BSCI', 'BSCV', 'BSGC', 'BSOS', 'BSST', 'BUAC', 'BUDT', 'BUFN', 'BULM', 'BUMK', 'BUMO', 'BUSI', 'CBMG', 'CCJS', 'CHBE', 'CHEM', 'CHIN', 'CHPH', 'CLAS', 'CLFS', 'CMLT', 'CMSC', 'COMM', 'CONS', 'CPET', 'CPGH', 'CPMS', 'CPPL', 'CPSA', 'CPSD', 'CPSF', 'CPSG', 'CPSN', 'CPSP', 'CPSS', 'DANC', 'ECON', 'EDCI', 'EDCP', 'EDHD', 'EDHI', 'EDMS', 'EDPS', 'EDSP', 'EDUC', 'ENAE', 'ENCE', 'ENCH', 'ENCO', 'ENEE', 'ENES', 'ENFP', 'ENGL', 'ENMA', 'ENME', 'ENNU', 'ENPM', 'ENPP', 'ENRE', 'ENSE', 'ENSP', 'ENST', 'ENTM', 'ENTS', 'EPIB', 'EXST', 'FILM', 'FIRE', 'FMSC', 'FOLA', 'FREN', 'GEMS', 'GEOG', 'GEOL', 'GERM', 'GREK', 'GVPT', 'HACS', 'HDCC', 'HEBR', 'HEIP', 'HESI', 'HESP', 'HHUM', 'HISP', 'HIST', 'HLSA', 'HLSC', 'HLTH', 'HONR', 'IMMR', 'INAG', 'INFM', 'INST', 'ISRL', 'ITAL', 'JAPN', 'JOUR', 'JWST', 'KNES', 'KORA', 'LARC', 'LASC', 'LATN', 'LBSC', 'LGBT', 'LING', 'MAIT', 'MATH', 'MEES', 'MIEH', 'MLAW', 'MOCB', 'MUED', 'MUSC', 'NACS', 'NFSC', 'NIAV', 'PERS', 'PHIL', 'PHYS', 'PLSC', 'PORT', 'PSYC', 'PUAF', 'RDEV', 'RELS', 'RUSS', 'SLAA', 'SLLC', 'SOCY', 'SPAN', 'SPHL', 'STAT', 'SURV', 'TDPS', 'THET', 'TLPL', 'UMEI', 'UNIV', 'URSP', 'USLT', 'VMSC', 'WMST']

function parseByDepartment(i, level) {
  
  // window.location = window.location.href + "201501/" + departments[i];
  
  $.ajax({
    url: "https://ntst.umd.edu/soc/search?courseId=" + departments[i] + "&sectionId=&termId=201501&_openSectionsOnly=on&courseLevelFilter=" + level + "&instructor=&teachingCenter=ALL&courseStartCompare=&courseStartHour=&courseStartMin=&courseStartAM=&courseEndHour=&courseEndMin=&courseEndAM=&creditCompare=&credits=&_classDay1=on&_classDay2=on&_classDay3=on&_classDay4=on&_classDay5=on",
    type: 'GET',
    success: function(response) {
      $(response).find('.course').each(function() {
        var course_number = $(this).attr('id');
        master[course_number] = {};
    
        console.log('course_number: ' + $(this).attr('id')); // course number
        
        var name = $(this).find('.course-title').text();
        master[course_number]['name'] = name;
        
        console.log('course-title: ' + $(this).find('.course-title').text());
        master[course_number]['sections'] = {};
        master[course_number]['instructors'] = {};
        $(this).find('.section').each(function() {
          var section = $(this);
          var sectionId = section.find('.section-id').text().trim();
          console.log(sectionId);
          master[course_number]['sections'][sectionId] = {};
    
          console.log('section-id: ' + section.find('.section-id').text().trim()); 
          var instructor = section.find('.section-instructor').text();
          
          master[course_number]['instructors'][instructor] = {};
    
          console.log('section-instructor: ' + section.find('.section-instructor').text()); 
          console.log('class-days-container:');
          
          section.find('.class-days-container .row').each(function() {
            var row = $(this);
            var section_days_arr = row.find('.section-days').text().split(/(?=[A-Z])/); // array of
            console.log('section-days: ' + row.find('.section-days').text());
            
            var start_time = row.find('.class-start-time').text();
            var end_time = row.find('.class-end-time').text();
            
            master[course_number]['sections'][sectionId]['meetings'] = {};
            master[course_number]['sections'][sectionId]['meetings']['start_time'] = start_time;
            master[course_number]['sections'][sectionId]['meetings']['end_time'] = end_time;
            master[course_number]['sections'][sectionId]['meetings']['days'] = section_days_arr;
    
            console.log('class-start-time: ' + row.find('.class-start-time').text());
            console.log('class-end-time: ' + row.find('.class-end-time').text());
            
            var location = row.find('.building-code').text() + row.find('.class-room').text();
            master[course_number]['sections'][sectionId]['location'] = location;
            console.log('building-code: ' + row.find('.building-code').text());
            console.log('class-room: ' + row.find('.class-room').text());
          });
        }); 
        console.log(' ');
    }); 
    }
  });
}




for (var i = 0; i < departments.length; i++) {
  parseByDepartment(i, 'UGRAD');
}

for (var i = 0; i < departments.length; i++) {
  parseByDepartment(i, 'GRAD');
}