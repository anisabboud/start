# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'json'

file = File.read("my_scripts/master.json");
data = JSON.parse(file);
weekday_map = {
	'M' => 'Monday',
	'Tu' => 'Tuesday',
	'W' => 'Wednesday',
	'Th' => 'Thursday',
	'F' => 'Friday',
	'Sa' => 'Saturday',
	'Su' => 'Sunday'
}
data.each do |course, course_info|
	course = Course.new(
		department: course[0..3],
		number: course[4..8],
		name: course_info['name'],
		university_id: 1
	)

	course.save

	
	# create a seperate section record for each section
	course_info['sections'].each do |sec, sec_info|
		begin
			instructor_record = course.instructors.build( title: "professor", name: sec_info['instructor'], course: course )
			instructor_record.save
		rescue ActiveRecord::RecordNotUnique => e
			instructor_record = Instructor.where(name: sec_info['instructor'], course: course).first
		end

		section_record = course.sections.build(
			number: sec,
			instructor: instructor_record
		) 

		section_record.save

		puts section_record.meetings.inspect
		puts instructor_record.meetings.inspect

		# create a meetable record for each day 
		sec_info['meetings'].each do |time, days|
			days.each do |day|
				section_record.meetings.build(
					location: sec_info['location'],
					weekday: weekday_map[day],
					start_time: time.split("-")[0],
					end_time: time.split("-")[1],
					meetable_id: section_record,
					meetable_type: "Section"
				)
			end
		end

		puts section_record.meetings.inspect
		puts instructor_record.meetings.inspect

		section_record.save
		
		puts "HERE"
		puts section_record.meetings.inspect
		puts instructor_record.meetings.inspect
	end

	course.save
end

