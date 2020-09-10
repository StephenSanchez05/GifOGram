class BlogSerializer < ActiveModel::Serializer
  attributes :id, :post, :created_at
  has_many :gifs
  belongs_to :user
end
