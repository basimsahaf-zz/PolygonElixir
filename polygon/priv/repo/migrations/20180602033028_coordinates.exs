defmodule Polygon.Repo.Migrations.Coordinates do
  use Ecto.Migration

  def change do
  	create table(:coordinates) do
  		add :lat, :float
     	add :lon, :float
      	add :name, :string
      	add :business_type, :string
  	end 
  end
end
