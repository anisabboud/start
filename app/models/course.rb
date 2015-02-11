class Course < ActiveRecord::Base
  has_many :sections
  has_many :instructors, through: :sections
  belongs_to :university
end
