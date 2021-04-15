class AddIndexForAuthorId < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :author_id
  end
end
