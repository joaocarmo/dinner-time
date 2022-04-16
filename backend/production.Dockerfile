# syntax=docker/dockerfile:1

FROM ruby:2.7.4

RUN apt-get update -qq && \
    apt-get install -y postgresql-client --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true
ENV RAILS_LOG_TO_STDOUT true

COPY Gemfile Gemfile.lock ./

RUN bundle config --global frozen 1

RUN bundle install --without development test

COPY . .

# Add a script to be executed every time the container starts
COPY entrypoint.sh /usr/bin/

RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]
