class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
    	t.belongs_to :conference
      t.string :name
      t.string :abbreviation
      t.string :color
      t.text :coords

      t.timestamps null: false
    end
  end
end
