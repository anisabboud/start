class RenameInstructorsTypeToTitle < ActiveRecord::Migration
  def change
    rename_column :instructors, :type, :title
  end
end
