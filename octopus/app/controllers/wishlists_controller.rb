class WishlistsController < ApplicationController
  def index
    @wishlists = Wishlist.all
    render json: @wishlists
  end

  def show
    @wishlist = Wishlist.find(params[:id])
    render json: @wishlist
  end

  def create
    @wishlist = Wishlist.new(wishlist_params)
    if @wishlist.save
      render json: @wishlist, status: :created, location: @wishlist
    else
      render json: @wishlist.errors, status: :unprocessable_entity
    end
  end

  def update
    @wishlist = Wishlist.find(params[:id])
    if @wishlist.update(wishlist_params)
      render json: @wishlist
    else
      render json: @wishlist.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @wishlist = Wishlist.find(params[:id])
    @wishlist.destroy
    redirect_to wishlists_path
  end

  private

  def wishlist_params
    params.require(:wishlist).permit(:name)
  end
end
