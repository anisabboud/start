class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :department
      t.integer :number
      t.string :name
      t.references :university, index: true

      t.timestamps
    end
  end
end
