class Api::V1::ExercisesController < Api::ApplicationController

  before_action :find_workout,only:[:create]
  before_action :find_exercise,only:[:destroy]

  def create
    
    exercise = Exercise.new exercise_params
    exercise.workout=@workout
    
    
    exercise.save
    render json: {id: @workout.id}

  end
  def destroy
    @exercise.destroy
    head :ok
  end

  private
  
  def find_workout
    @workout=Workout.find params[:workout_id]
  end

  def find_exercise
    @exercise=Exercise.find params[:id]
  end

  def exercise_params
    params.require(:exercise).permit(:name, :sets, :reps)
  end

  def record_invalid(error)
    invalid_record = error.record
    errors = invalid_record.errors.map do |field, message|
      {
        type: error.class.to_s,
        record_type: invalid_record.class.to_s,
        field: field,
        message: message,
      }
    end
    render(
      json: { status:422, errors: errors }
    )
  end
end
