class Business < ApplicationRecord

  validates :owner_id, :name, :category, :address, presence: true
  validates :city, :state, :zip_code, :phone_number, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
  
  has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review

  has_one_attached :photo
  has_many_attached :photos

  def average_rating
    reviews.average(:rating)
  end
  
end
