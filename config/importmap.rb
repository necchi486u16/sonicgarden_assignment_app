# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@rails/ujs", to: "rails-ujs.js"
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
