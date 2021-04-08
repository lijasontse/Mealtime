class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false
      t.string :category, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.integer :phone_number, null: false
      t.string :website_url
      t.timestamps
    end
    add_index :businesses, :owner_id
  end
end
