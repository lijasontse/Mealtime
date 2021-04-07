# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base
  .connection
  .tables
  .each { |t| ActiveRecord::Base.connection.reset_pk_sequence!(t) } 

  User.delete_all

  u1 = User.create!(
    first_name: "Jason",
    last_name: "Li",
    email: "tse.jasonli@gmail.com",
    password: '123456'
  )

  u2 = User.create!(
    first_name: "Mart",
    last_name: "Deng",
    email: "martdeng@gmail.com",
    password: '654321'
  )

  u3 = User.create!(
    first_name: "Teddy",
    last_name: "Pornprinya",
    email: "teddy@gmail.com",
    password: 'a123456'
  )

  demoUser = User.create!(
    first_name: "Dee",
    last_name: "Demo",
    email: "demouser@demo.com",
    password: "good123"
  )