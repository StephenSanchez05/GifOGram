class GifSerializer < ActiveModel::Serializer
  attributes :id, :url
  belongs_to :blog
end
