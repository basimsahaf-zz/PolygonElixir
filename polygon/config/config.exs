# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

config :polygon, Polygon.Endpoint,
  http: [
    port: 4000,
	protocol_options: [max_request_line_length: 8192, max_header_value_length: 8192]
  ]
# General application configuration
config :polygon,
  ecto_repos: [Polygon.Repo]

config :cors_plug,
  max_age: 86400,
  methods: ["GET", "POST"]

# Configures the endpoint
config :polygon, PolygonWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "SOa8YZkzYzeJpE+tbkhg6Mw16IkQMmBprsfnFLmS4TGDQzriKa0vOfYt159H3jpf",
  render_errors: [view: PolygonWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Polygon.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
