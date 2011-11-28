class Content < ActiveRecord::Base
  class << self
    def package
      all.each.inject(""){|ret, content|
        ret + render(content_path(content))
      }
    end
  end
end
