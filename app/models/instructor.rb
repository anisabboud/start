class Instructor < ActiveRecord::Base
  has_many :meetings, as: :meetable
  belongs_to :course
  enum title: [ :professor, :teaching_assistant ]
end
