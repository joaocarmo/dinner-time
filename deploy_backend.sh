#!/bin/bash

heroku git:remote -a mydinnertime
git subtree push --prefix backend heroku main
