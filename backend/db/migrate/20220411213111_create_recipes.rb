class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :author
      t.string :category
      t.integer :cook_time
      t.string :cuisine
      t.string :image
      t.integer :prep_time
      t.decimal :ratings
      t.string :title

      t.timestamps
    end
  end
end
