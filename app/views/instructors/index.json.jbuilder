json.array!(@instructors) do |instructor|
  json.extract! instructor, :id, :type, :name, :course_id
  json.url instructor_url(instructor, format: :json)
end
