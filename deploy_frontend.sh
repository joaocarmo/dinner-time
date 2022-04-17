#!/bin/bash

heroku git:remote -a mydinnertimeui
git subtree push --prefix frontend heroku main
