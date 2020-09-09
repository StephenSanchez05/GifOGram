class BlogSerializer < ActiveModel::Serializer
  attributes :id, :post, :created_at
  belongs_to :user
end
