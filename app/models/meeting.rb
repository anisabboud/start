class Meeting < ActiveRecord::Base
  belongs_to :meetable, polymorphic: true
  enum weekday: [ :TBA, :Sunday, :Monday, :Tuesday, :Wednesday, :Thursday, :Friday, :Saturday ]
end
