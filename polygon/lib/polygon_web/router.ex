defmodule PolygonWeb.Router do
  use PolygonWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug
  end

  scope "/", PolygonWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/get_coordinates", PolygonWeb do
    pipe_through :api
    get "/", ApiController, :get_coordinates
  end

  # Other scopes may use custom stacks.
  # scope "/api", PolygonWeb do
  #   pipe_through :api
  # end
end
