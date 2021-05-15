class AddMessageToBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :message, :string
  end
end
