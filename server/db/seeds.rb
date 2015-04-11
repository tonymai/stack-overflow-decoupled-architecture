# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
10.times do
  question = Question.create(title: Faker::Company.catch_phrase + '?', content: Faker::Lorem.sentences(5).join(' '))
  5.times do
    question.answers.create(title: Faker::Company.catch_phrase, content: Faker::Lorem.paragraphs(10).join(' '))
  end
end