defmodule PolygonWeb.ApiController do
	use PolygonWeb, :controller

	def get_coordinates(conn, _params) do
		coordinates = Polygon.Schema |> Polygon.Repo.all
		conn
    	|> put_resp_content_type("application/json")
    	|> send_resp(200, Poison.encode!(%{"coordinates" => coordinates}))
	end
end