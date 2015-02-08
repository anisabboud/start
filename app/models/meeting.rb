class Meeting < ActiveRecord::Base
  belongs_to :meetable, polymorphic: true
  enum weekday: [ :Sunday, :Monday, :Tuesday, :Wednesday, :Thursday, :Friday, :Saturday ]
  enum meetable_type: [ :instructor, :section ]
end
