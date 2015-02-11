class Instructor < ActiveRecord::Base
  has_many :meetings, as: :meetable
  has_many :sections
  has_many :courses, through: :sections
  belongs_to :course
  enum title: [ :professor, :teaching_assistant ]
  validates_uniqueness_of :name
end
