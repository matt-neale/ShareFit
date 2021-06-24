class Workout < ApplicationRecord

  belongs_to :user, optional: true

  has_many :exercises, dependent: :nullify
  has_many :comments, dependent: :nullify

  before_validation :capitalize_title

  validates :title, presence: {message: 'Please enter a title.'}
  validates :title, length: { minimum: 5, maximum: 50}

  private

    

    def capitalize_title
      self.title.capitalize!
    end
end
