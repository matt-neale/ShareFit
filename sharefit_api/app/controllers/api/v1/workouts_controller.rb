class Api::V1::WorkoutsController < Api::ApplicationController

  before_action :find_workout, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only:[:create, :destroy]
  before_action :authorize_user!, only:[:edit,:update,:destroy]

  def index
    workouts = Workout.order(created_at: :desc)

    render(
      json: workouts,
      each_serializer: WorkoutCollectionSerializer,
    )
  end

  def show
    if @workout
      render(
        json: @workout,
        include: [ :creator, :exercises, { comments: [ :author ] } ]
      )
    else
      render(json: {error: "Workout not found."})
    end
  end

  def create
    workout = Workout.new workout_params
    workout.user = current_user

    workout.save!
    render json: {id: workout.id}
  end

  def update
    if @workout.update workout_params
      render json: {id: @workout.id}
    else
      render(
        json: { errors: @workout.errors.messages},
        status: 422)
    end
  end

  def destroy
    @workout.destroy
    head :ok
  end

  private

  def find_workout
    @workout = Workout.find params[:id]
  end

  def workout_params
    params.require(:workout).permit(:title, :description)
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
    render(json: { status: 422, errors: errors})
  end

  def authorize_user!
    unless can?(:crud,Workout)
      render(
        json: { errors: @workout.errors.messages},
        status: 401)
    end
  end

end
