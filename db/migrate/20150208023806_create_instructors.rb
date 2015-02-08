class CreateInstructors < ActiveRecord::Migration
  def change
    create_table :instructors do |t|
      t.integer :type
      t.string :name
      t.references :course, index: true

      t.timestamps
    end
  end
end
