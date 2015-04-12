class Question < ActiveRecord::Base
  has_many :answers

  validates :title, :content, presence: true

  # def increase_vote
  #   self.vote_count += 1
  #   self.save
  # end

  # def decrease_vote
  #   self.vote_count -= 1
  #   self.save
  # end

end