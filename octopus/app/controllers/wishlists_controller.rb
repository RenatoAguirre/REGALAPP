class WishlistsController < ApplicationController
  before_action :set_wishlist, only: [:show, :update, :destroy]
  # before_action :authorize, only: [:create, :delete, :update]

  # GET /wishlists
  def index
    @wishlists = Wishlist.all
    render json: @wishlists
  end

  # GET /wishlists/:id
  def show
    render json: { wishlist: @wishlist, products: @wishlist.products }
  end

  def me_wishlist
    @wishlist = Wishlist.where(user_id: @decoded_token[:sub]).first
    render json: { wishlist: @wishlist, products: @wishlist.products }
  end

  # POST /wishlists
  def create
    @wishlist = Wishlist.new(wishlist_params)

    if @wishlist.save
      render json: { wishlist: @wishlist, link: 'some_link'}, status: :created, location: @wishlist 
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
    params.require(:wishlist).permit(:user_id)
  end
end
