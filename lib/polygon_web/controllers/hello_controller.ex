defmodule PolygonWeb.HelloController do
  use PolygonWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end