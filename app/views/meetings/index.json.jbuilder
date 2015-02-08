json.array!(@meetings) do |meeting|
  json.extract! meeting, :id, :timeable_id, :timeable_type, :location, :weekday, :start_time, :end_time
  json.url meeting_url(meeting, format: :json)
end
