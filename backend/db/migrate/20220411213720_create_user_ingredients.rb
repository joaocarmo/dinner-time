class CreateUserIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :user_ingredients do |t|
      t.string :unit
      t.decimal :amount

      t.timestamps
    end
  end
end
