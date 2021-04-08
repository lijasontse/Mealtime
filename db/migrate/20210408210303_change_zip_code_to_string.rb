class ChangeZipCodeToString < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :zip_code, :string
  end
end
