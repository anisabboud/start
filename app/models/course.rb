class Course < ActiveRecord::Base
  has_many :sections
  has_many :instructors
  belongs_to :university
end
