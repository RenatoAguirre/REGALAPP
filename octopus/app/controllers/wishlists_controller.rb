class WishlistsController < ApplicationController
  before_action :set_wishlist, only: [:show, :update, :destroy]

  # GET /wishlists
  def index
    @wishlists = Wishlist.all
    render json: @wishlists
  end

  # GET /wishlists/:id
  def show
    render json: { wishlist: @wishlist, products: @wishlist.products }
  end

  # POST /wishlists
  def create
    @wishlist = Wishlist.new(wishlist_params)

    if @wishlist.save
      render json: @wishlist, status: :created, location: @wishlist
    else
      render json: @wishlist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wishlists/:id
  def update
    if @wishlist.update(wishlist_params)
      render json: @wishlist
    else
      render json: @wishlist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wishlists/:id
  def destroy
    @wishlist.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_wishlist
    @wishlist = Wishlist.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def wishlist_params
    params.require(:wishlist).permit(:user_id)
  end
end
