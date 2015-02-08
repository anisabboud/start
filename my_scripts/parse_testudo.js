var master = {
  'course': {
      'sections': {
          'section': {
            'location': "",
            'meetings': []
          } 
      },
      'instructors': {
          'instructor': {
              'location': "",
              'email': "",
              'meetings': []
          } 
      },
  },

};

var departments = ['AASP', 'AAST', 'AGNR', 'AMSC', 'AMST', 'ANSC', 'ANTH', 'AOSC', 'ARAB', 'ARCH', 'AREC', 'ARHU', 'ARMY', 'ARSC', 'ARTH', 'ARTT', 'ASTR', 'BCHM', 'BIOE', 'BIOL', 'BIOM', 'BIPH', 'BMGT', 'BSCI', 'BSCV', 'BSGC', 'BSOS', 'BSST', 'BUAC', 'BUDT', 'BUFN', 'BULM', 'BUMK', 'BUMO', 'BUSI', 'CBMG', 'CCJS', 'CHBE', 'CHEM', 'CHIN', 'CHPH', 'CLAS', 'CLFS', 'CMLT', 'CMSC', 'COMM', 'CONS', 'CPET', 'CPGH', 'CPMS', 'CPPL', 'CPSA', 'CPSD', 'CPSF', 'CPSG', 'CPSN', 'CPSP', 'CPSS', 'DANC', 'ECON', 'EDCI', 'EDCP', 'EDHD', 'EDHI', 'EDMS', 'EDPS', 'EDSP', 'EDUC', 'ENAE', 'ENCE', 'ENCH', 'ENCO', 'ENEE', 'ENES', 'ENFP', 'ENGL', 'ENMA', 'ENME', 'ENNU', 'ENPM', 'ENPP', 'ENRE', 'ENSE', 'ENSP', 'ENST', 'ENTM', 'ENTS', 'EPIB', 'EXST', 'FILM', 'FIRE', 'FMSC', 'FOLA', 'FREN', 'GEMS', 'GEOG', 'GEOL', 'GERM', 'GREK', 'GVPT', 'HACS', 'HDCC', 'HEBR', 'HEIP', 'HESI', 'HESP', 'HHUM', 'HISP', 'HIST', 'HLSA', 'HLSC', 'HLTH', 'HONR', 'IMMR', 'INAG', 'INFM', 'INST', 'ISRL', 'ITAL', 'JAPN', 'JOUR', 'JWST', 'KNES', 'KORA', 'LARC', 'LASC', 'LATN', 'LBSC', 'LGBT', 'LING', 'MAIT', 'MATH', 'MEES', 'MIEH', 'MLAW', 'MOCB', 'MUED', 'MUSC', 'NACS', 'NFSC', 'NIAV', 'PERS', 'PHIL', 'PHYS', 'PLSC', 'PORT', 'PSYC', 'PUAF', 'RDEV', 'RELS', 'RUSS', 'SLAA', 'SLLC', 'SOCY', 'SPAN', 'SPHL', 'STAT', 'SURV', 'TDPS', 'THET', 'TLPL', 'UMEI', 'UNIV', 'URSP', 'USLT', 'VMSC', 'WMST']

for (var i = 0; i < departments.length; i++) {
  window.location = window.location.href + "201501/" + departments[i];

  $('#show-all-sections-button').click();

  setTimeout(function(){}, 6000);

  $('.course').each(function() {
    console.log($(this).attr('id'));
    console.log($(this).find('.course-title').text());
    $(this).find('.section').each(function() {
      var section = $(this);
      console.log('section-id: ' + section.find('.section-id').text().trim()); 
      console.log('section-instructor: ' + section.find('.section-instructor').text()); 
      console.log('class-days-container:');
      section.find('.class-days-container .row').each(function() {
        var row = $(this);
        console.log('section-days: ' + row.find('.section-days').text());
        console.log('class-start-time: ' + row.find('.class-start-time').text());
        console.log('class-end-time: ' + row.find('.class-end-time').text());
        console.log('class-room: ' + row.find('.class-room').text());
      });
    }); 
    console.log(' ');
  });

}

$('#show-all-sections-button').click();
setTimeout(function(){}, 3000);
$('.course').each(function() {
  console.log($(this).attr('id'));
  console.log($(this).find('.course-title').text());
  $(this).find('.section').each(function() {
    var section = $(this);
    console.log('section-id: ' + section.find('.section-id').text().trim()); 
    console.log('section-instructor: ' + section.find('.section-instructor').text()); 
    console.log('class-days-container:');
    section.find('.class-days-container .row').each(function() {
      var row = $(this);
      console.log('section-days: ' + row.find('.section-days').text());
      console.log('class-start-time: ' + row.find('.class-start-time').text());
      console.log('class-end-time: ' + row.find('.class-end-time').text());
      console.log('class-room: ' + row.find('.class-room').text());
    });
  }); 
  console.log(' ');
});