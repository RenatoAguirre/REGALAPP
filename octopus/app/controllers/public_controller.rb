class PublicController < ApplicationController
  def public
    render json: { message: 'All good. You don\'t need to be authenticated to access this endpoint.' }
  end
end