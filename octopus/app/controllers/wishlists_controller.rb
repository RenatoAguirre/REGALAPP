class WishlistsController < ApplicationController
  before_action :set_wishlist, only: [:show, :update, :destroy]
  before_action :authorize, only: [:create, :delete, :update, :me_wishlist]

  # PATCH/PUT /wishlists/:id
  def update
    @wishlist = Wishlist.where(user_id: @decoded_token[:sub]).first
    @wishlist.products = wishlist_params[:products]
    render json: @wishlist
  end

  def me_wishlist
    @wishlist = Wishlist.where(user_id: @decoded_token[:sub])

    if @wishlist.nil?
      @wishlist = Wishlist.create(user_id: @decoded_token[:sub])
      render json: { wishlist: @wishlist, link: 'some_link'}, status: :created, location: @wishlist 
    else
      render json: { wishlist: @wishlist, link: 'some_link'}, status: :created, location: @wishlist 
    end
  end

  def other_usher_wishlist
    @other_user = User.where(auth0_id: params[:id]).first
    @wishlist = Wishlist.where(user_id: @other_user.id).first
    render json: { wishlist: @wishlist, products: @wishlist.products }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_wishlist
    @wishlist = Wishlist.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def wishlist_params
    params.require(:wishlist).permit(:products)
  end
end
