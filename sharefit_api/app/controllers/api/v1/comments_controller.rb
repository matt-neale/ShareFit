class Api::V1::CommentsController < Api::ApplicationController

  before_action :authenticate_user!,only:[:create,:destroy]
  before_action :find_workout,only:[:create]
  before_action :find_comment,only:[:destroy]

  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def create
    comment = Comment.new body: params["body"], workout_id: params["workout_id"], user: current_user
    
    comment.save
    render(json: comment, status: 200)

  end
  def destroy
    if can?(:crud, @comment)
      @comment.destroy
      head :ok
    else
      render(
        json: { errors: @comment.errors.messages},
        status: 401)
    end
  end

  private

  def find_workout
    @workout=Workout.find params[:workout_id]
  end

  def find_comment
    @comment=Comment.find params[:id]
  end
  

  def comment_params
    params.require(:comment).permit(:body)
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
