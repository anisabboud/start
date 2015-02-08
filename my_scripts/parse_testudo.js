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