class Answer < ActiveRecord::Base
  belongs_to :question

  validates :title, :content, presence: true

  def increase_vote
    self.vote_count += 1
    self.save
  end

  def decrease_vote
    self.vote_count -= 1
    self.save
  end

end