defmodule Polygon.Schema do
	use Ecto.Schema

	@doc """
		This module provides a schema for the datapoints that exist in the
		coordinates table of the Postegresql db.
	"""

	# Used to help Poison get the necessary fields when asked to encode
	@derive {Poison.Encoder, only: [:lat, :lon, :name, :business_type]}

	#defining the schema
	schema "coordinates" do
		field :lat,				:float
		field :lon, 			:float
		field :name,			:string
		field :business_type,	:string
	end
end