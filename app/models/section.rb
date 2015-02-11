class Section < ActiveRecord::Base
  has_many :meetings, as: :meetable
  belongs_to :course
  belongs_to :instructor
end
