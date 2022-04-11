# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

seeds_recipes_path = File.join(File.dirname(__FILE__), "seeds", "recipes.json")

def create_new_recipe(recipe)
  new_recipe = Recipe.create(
    author: recipe["author"],
    category: recipe["category"],
    cook_time: recipe["cook_time"],
    cuisine: recipe["cuisine"],
    image: recipe["image"],
    prep_time: recipe["prep_time"],
    ratings: recipe["ratings"],
    title: recipe["title"],
  )

  recipe["ingredients"].each do |ingredient|
    simple_ingredient = false

    begin
      parsed = Ingreedy.parse(ingredient)
    rescue Exception
      # Failed to parse ingredient
      puts "Failed to parse ingredient: #{ingredient}"
      simple_ingredient = true
    end

    if simple_ingredient
      new_ingredient = Ingredient.find_or_create_by(
        name: ingredient,
      )

      new_recipe.recipe_ingredients.create(
        amount: 1,
        ingredient_id: new_ingredient.id,
        unit: "",
      )
    else
      new_ingredient = Ingredient.find_or_create_by(
        name: parsed.ingredient,
      )

      new_recipe.recipe_ingredients.create(
        amount: parsed.amount,
        ingredient_id: new_ingredient.id,
        unit: parsed.unit,
      )
    end
  end
end

if File.exist?(seeds_recipes_path)
  seeds_recipes = JSON.parse(File.read(seeds_recipes_path))
  seeds_recipes.each do |recipe|
    puts "Creating recipe: #{recipe["title"]}"
    create_new_recipe(recipe)
  end
else
  # Print error message
  puts "ERROR: #{seeds_recipes_path} not found"
end
