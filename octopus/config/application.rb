require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Octopus
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true

    Rails.application.config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*' # You can specify the allowed origins here, e.g., 'http://localhost:3000'
    
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head],
          expose: ['Access-Control-Allow-Origin']
      end
    end
    
    Rails.application.config.auth0 = {
      domain: "dev-rb7h7bevogf3tu8q.us.auth0.com",
      audience: "https://some-friendly-identifier/"
    }
  end
end
