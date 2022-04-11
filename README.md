# Dinner time

## Problem statement

> **It's dinner time ! Create an application that helps users find the most relevant recipes that they can prepare with the ingredients that they have at home**

## Objective

Deliver an application prototype to answer the above problem statement.

By prototype, we mean:

- something usable, yet as simple as possible
- UI / design is not important
- we do not expect features which are outside the basic scope of the problem

We expect to use this prototype as a starting point to discuss current implenentation details, as well as ideas for improvement.

### Requirements

#### Tech must-haves

- [ ] MySQL / PostgreSQL or any other MySQL-compatible database.
- [ ] A backend application which responds to queries
- [ ] A web interface (can be VERY simple)
- [ ] Ruby on Rails

#### Bonus points

- [ ] React
- [ ] Application is hosted on heroku

## Data

We provide two datasets to choose from:

- [french-language recipes](https://pennylane-interviewing-assets-20220328.s3.eu-west-1.amazonaws.com/recipes-fr.json.gz) scraped from www.marmiton.org with [python-marmiton](https://github.com/remaudcorentin-dev/python-marmiton)
- [english-language recipes](https://pennylane-interviewing-assets-20220328.s3.eu-west-1.amazonaws.com/recipes-en.json.gz) scraped from www.allrecipes.com with [recipe-scrapers](https://github.com/hhursev/recipe-scrapers)

Download it with this command if the above link doesn't work:

```sh
wget https://d1sf7nqdl8wqk.cloudfront.net/recipes.json.gz && gzip -dc recipes.json.gz > recipes.json
```

## Deliverable

- the 2-3 user stories which the application implements
- the codebase : in a git repo (share it with @quentindemetz @tdeo @rpechayr @soyoh @alex-min @karineHbt @Juleffel @jfpimentel @lucasbonin)
- the database structure
- the application, running on Heroku or on a personal server.
- please submit links to the GitHub repo and the hosted application [via this form](https://forms.gle/siH7Rezuq2V1mUJGA)
