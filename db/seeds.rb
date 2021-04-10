# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Business.destroy_all

ActiveRecord::Base
  .connection
  .tables
  .each { |t| ActiveRecord::Base.connection.reset_pk_sequence!(t) } 


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

  biz1 = Business.create!(
    name: "ShanDong Restaurant",
    category: "Chinese",
    address: "328 10th St Ste 101",
    city: "Oakland",
    state: "CA",
    zip_code: "94607",
    phone_number: "510-839-2299",
    website_url: "shandongoakland.com",
    lat: 37.80065088595391, 
    lng: -122.26998911950326,
    owner_id: 1
  )

  biz2 = Business.create!(
    name: "Ricky Thai Bistro",
    category: "Thai",
    address: "1617 NE 123rd St",
    city: "North Miami",
    state: "FL",
    zip_code: "33181",
    phone_number: "305-891-9292",
    website_url: "",
    lat: 25.889561330267156,
    lng: -80.16568927310341,
    owner_id: 3
  )

  biz3 = Business.create!(
    name: "Bi-Rite Creamery",
    category: "Ice Cream & Frozen Yogurt",
    address: "3692 18th St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94110",
    phone_number: "415-626-5600",
    website_url: "biritemarket.com/creamery",
    lat: 37.76239230666739, 
    lng: -122.42576200949073,
    owner_id: 2
  )

  Business.all.each_with_index do |business, i|
    business.file = open
  end