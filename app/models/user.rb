class User < ApplicationRecord

  validates :email, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true 
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, presence: true, uniqueness: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :businesses, 
    foreign_key: :owner_id,
    class_name: :Business

  has_many :reviews,
    foreign_key: :author_id,
    class_name: :Review

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end



end
