class WishlistsController < ApplicationController
  before_action :authorize, only: [:create, :delete, :update, :me_wishlist]

  # PATCH/PUT /wishlists/:id
  def update
    @wishlist = Wishlist.where(user_id: @decoded_token[:sub]).first
    @wishlist.products = wishlist_params[:products]
    render json: @wishlist
  end

  def me_wishlist
    user = handle_new_users_from_auth0
    @wishlist = Wishlist.where(user_id: user.id)

    if @wishlist.first.nil?
      @wishlist = Wishlist.new(user_id: user.id)
      @wishlist.save!
      render json: { wishlist: @wishlist, link: 'some_link'}, status: :created
    else
      render json: { wishlist: @wishlist, link: 'some_link'}, status: :created
    end
  end

  def other_usher_wishlist
    @other_user = User.where(auth0_id: params[:id]).first
    @wishlist = Wishlist.where(user_id: @other_user.id).first
    render json: { wishlist: @wishlist, products: @wishlist.products }
  end

  def handle_new_users_from_auth0
    User.find_or_create_by(auth0_id: auth0_token["sub"])
  end

  private
  # Only allow a list of trusted parameters through.
  def wishlist_params
    params.require(:wishlist).permit(:products)
  end

  def auth0_token
    @decoded_token.token[0]
  end
end
