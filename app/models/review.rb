class Review < ApplicationRecord

  validates :author_id, presence: true
  validates :author_id, presence: true, uniqueness: {scope: :business_id}
  validates :body, presence: {
    message: "To submit your review, please select a star rating for this business.",
  }
  validates :rating, inclusion: { 
    in: (1..5),
    message: "Please choose a star rating between 1 to 5",
  }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
  
  belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business
end
