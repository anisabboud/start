json.array!(@courses) do |course|
  json.extract! course, :id, :department, :number, :name, :university_id
  json.url course_url(course, format: :json)
end
