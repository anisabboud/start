class ChangeTimeableIdToMeetableId < ActiveRecord::Migration
  def change
    rename_column :meetings, :timeable_id, :meetable_id
  end
end
