class Review < ApplicationRecord

  validates :author_id, :body, :rating, :business_id, presence: true
  validates :rating, inclusion: { in: (1..5).to_a }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
  
  belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business
end
