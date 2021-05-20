class AddHoursAndDaysArrayToBiz < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :hours, :string, array: true 
    add_column :businesses, :days, :string, array: true
  end
end
