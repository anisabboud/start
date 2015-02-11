class ChangeMeetableTypeOnMeetings < ActiveRecord::Migration
  def change
  	change_column :meetings, :meetable_type, :string
  end
end
