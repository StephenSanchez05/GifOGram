class BlogSerializer < ActiveModel::Serializer
  attributes :id, :post
  belongs_to :user
end
