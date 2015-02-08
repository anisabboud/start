class CreateUniversities < ActiveRecord::Migration
  def change
    create_table :universities do |t|
      t.string :name
      t.string :country
      t.string :state

      t.timestamps
    end
  end
end
