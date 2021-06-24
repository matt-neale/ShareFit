class Comment < ApplicationRecord

  belongs_to :user, optional: true
  belongs_to :workout

  validates :body, presence:{message: 'Please enter comment body.'}
  
end
