defmodule Polygon.Repo.Migrations.Datapoints do
  use Ecto.Migration

  def change do
  	create table(:datapoints) do
      add :lat, :float
      add :lon, :float
      add :name, :string
      add :business_type, :string
    end
  end
end
