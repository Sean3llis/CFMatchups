class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
    	t.belongs_to :home
    	t.belongs_to :away
    	t.datetime :time


     	t.timestamps null: false
    end
  end
end
