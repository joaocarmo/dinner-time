# Dinner time

Problem statement [here][problem].

## User stories

User stories are the main way to communicate the problem to the team. They are
available in the [here][stories].

## Backend

Using buildpack: _heroku/ruby_.

Deployed on [Heroku][heroku] and available at
<https://mydinnertime.herokuapp.com/api/v1>.

### DB Structure

Available in the schema file [here][schema].

## Frontend

Using buildpack: _mars/create-react-app_.

Deployed on [Heroku][heroku] and available at
<https://mydinnertimeui.herokuapp.com>.

## Data

Recipes scraped from <www.allrecipes.com> with [recipe-scrapers][recipe-scrapers]

<!-- References -->

[heroku]: https://heroku.com
[problem]: ./PROBLEM.md
[recipe-scrapers]: https://github.com/hhursev/recipe-scrapers
[schema]: ./backend/db/schema.rb
[stories]: ./USER_STORIES.md
