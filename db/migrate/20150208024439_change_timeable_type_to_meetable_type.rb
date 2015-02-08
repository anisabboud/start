class ChangeTimeableTypeToMeetableType < ActiveRecord::Migration
  def change
        rename_column :meetings, :timeable_type, :meetable_type
  end
end
