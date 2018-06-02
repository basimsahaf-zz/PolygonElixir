defmodule PolygonWeb.PageController do
  use PolygonWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
