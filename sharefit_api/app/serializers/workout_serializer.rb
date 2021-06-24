class WorkoutSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    
    :created_at,
    :updated_at,
  )

  belongs_to(:user, key: :creator)

  has_many(:exercises)
  has_many(:comments)

  class ExerciseSerializer < ActiveModel::Serializer
    attributes :id, :name, :sets, :reps

    
    belongs_to(:workout)
  end

 
  

  class CommentSerializer < ActiveModel::Serializer
    attributes :id, :body, :created_at, :updated_at

    # This will not work automatically when included nested associations
    # We will need to include it in the controller
    belongs_to(:user, key: :author)
  end


  
end
