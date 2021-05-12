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
Review.destroy_all

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
    website_url: "https://shandongoakland.com",
    lat: 37.80065088595391, 
    lng: -122.26998911950326,
    owner_id: 1
  )

  pic1Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz1a.png')
  biz1.photo.attach(io: pic1Index, filename: 'biz1a.png')

  picShow1a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz1b.png')
  biz1.photos.attach(io: picShow1a, filename: 'biz1b.png')
  picShow1b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz1c.png')
  biz1.photos.attach(io: picShow1b, filename: 'biz1c.png')
  picShow1c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz1d.png')
  biz1.photos.attach(io: picShow1c, filename: 'biz1d.png')
  picShow1d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz1e.png')
  biz1.photos.attach(io: picShow1d, filename: 'biz1e.png')

  biz2 = Business.create!(
    name: "Champa Garden",
    category: "Laotian, Asian Fusion, Thai",
    address: "613 Faxon Ave",
    city: "San Francisco",
    state: "CA",
    zip_code: "94112",
    phone_number: "415-349-4186",
    website_url: "https://champagarden.bestcafes.online/",
    lat: 37.725204056220235,
    lng: -122.46002702869959,
    owner_id: 3
  )

  pic2Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz2a.png')
  biz2.photo.attach(io: pic2Index, filename: 'biz2a.png')

  picShow2a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz2b.png')
  biz2.photos.attach(io: picShow2a, filename: 'biz2b.png')
  picShow2b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz2c.png')
  biz2.photos.attach(io: picShow2b, filename: 'biz2c.png')
  picShow2c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz2d.png')
  biz2.photos.attach(io: picShow2c, filename: 'biz2d.png')
  picShow2d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz2e.png')
  biz2.photos.attach(io: picShow2d, filename: 'biz2e.png')

  biz3 = Business.create!(
    name: "Bi-Rite Creamery",
    category: "Ice Cream & Frozen Yogurt",
    address: "3692 18th St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94110",
    phone_number: "415-626-5600",
    website_url: "https://biritemarket.com/creamery",
    lat: 37.76239230666739, 
    lng: -122.42576200949073,
    owner_id: 2
  )
  
  pic3Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz3a.png')
  biz3.photo.attach(io: pic3Index, filename: 'biz3a.png')

  picShow3a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz3b.png')
  biz3.photos.attach(io: picShow3a, filename: 'biz3b.png')
  picShow3b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz3c.png')
  biz3.photos.attach(io: picShow3b, filename: 'biz3c.png')
  picShow3c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz3d.png')
  biz3.photos.attach(io: picShow3c, filename: 'biz3d.png')
  picShow3d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz3e.png')
  biz3.photos.attach(io: picShow3d, filename: 'biz3e.png')

  biz4 = Business.create!(
    name: "Rintaro",
    category: "Izakaya",
    address: "82 14th St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94103",
    phone_number: "415-589-7022",
    website_url: "https://www.izakayarintaro.com/",
    lat: 37.76896827085968, 
    lng: -122.41512537287721,
    owner_id: 4
  )

  pic4Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz4a.png')
  biz4.photo.attach(io: pic4Index, filename: 'biz4a.png')

  picShow4a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz4b.png')
  biz4.photos.attach(io: picShow4a, filename: 'biz4b.png')
  picShow4b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz4c.png')
  biz4.photos.attach(io: picShow4b, filename: 'biz4c.png')
  picShow4c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz4d.png')
  biz4.photos.attach(io: picShow4c, filename: 'biz4d.png')
  picShow4d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz4e.png')
  biz4.photos.attach(io: picShow4d, filename: 'biz4e.png')

  biz5 = Business.create!(
    name: "Hinata",
    category: "Sushi Bars, Japanese",
    address: "810 Van Ness Ave",
    city: "San Francisco",
    state: "CA",
    zip_code: "94109",
    phone_number: "415-829-8291",
    website_url: "http://hinatasf.com/",
    lat: 37.783297308395845, 
    lng: -122.4205711440412,
    owner_id: 4
  )

  pic5Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz5a.png')
  biz5.photo.attach(io: pic5Index, filename: 'biz5a.png')

  picShow5a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz5b.png')
  biz5.photos.attach(io: picShow5a, filename: 'biz5b.png')
  picShow5b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz5c.png')
  biz5.photos.attach(io: picShow5b, filename: 'biz5c.png')
  picShow5c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz5d.png')
  biz5.photos.attach(io: picShow5c, filename: 'biz5d.png')
  picShow5d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz5e.png')
  biz5.photos.attach(io: picShow5d, filename: 'biz5e.png')

  biz6 = Business.create!(
    name: "Dumpling Time",
    category: "Dim Sum, Asian Fusion",
    address: "11 Division St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94103",
    phone_number: "415-525-4797",
    website_url: "https://dumplingtime.com/",
    lat: 37.76989522157689, 
    lng: -122.40237817287723,
    owner_id: 4
  )

  pic6Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz6a.png')
  biz6.photo.attach(io: pic6Index, filename: 'biz6a.png')

  picShow6a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz6b.png')
  biz6.photos.attach(io: picShow6a, filename: 'biz6b.png')
  picShow6b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz6c.png')
  biz6.photos.attach(io: picShow6b, filename: 'biz6c.png')
  picShow6c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz6d.png')
  biz6.photos.attach(io: picShow6c, filename: 'biz6d.png')
  picShow6d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz6e.png')
  biz6.photos.attach(io: picShow6d, filename: 'biz6e.png')


  biz7 = Business.create!(
    name: "Boba Guys",
    category: "Bubble Tea",
    address: "3491 19th St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94110",
    phone_number: "415-967-2622",
    website_url: "https://www.bobaguys.com/",
    lat: 37.76054579458712, 
    lng: -122.42097833443111,
    owner_id: 4
  )

  pic7Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz7a.png')
  biz7.photo.attach(io: pic7Index, filename: 'biz7a.png')

  picShow7a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz7b.png')
  biz7.photos.attach(io: picShow7a, filename: 'biz7b.png')
  picShow7b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz7c.png')
  biz7.photos.attach(io: picShow7b, filename: 'biz7c.png')
  picShow7c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz7d.png')
  biz7.photos.attach(io: picShow7c, filename: 'biz7d.png')
  picShow7d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz7e.png')
  biz7.photos.attach(io: picShow7d, filename: 'biz7e.png')

  biz8 = Business.create!(
    name: "Fogo de Chão Brazilian Steakhouse",
    category: "Brazilian, Steakhouses",
    address: "201 3rd St Ste 100",
    city: "San Francisco",
    state: "CA",
    zip_code: "94103",
    phone_number: "415-427-0004",
    website_url: "https://fogodechao.com/reservations/?utm_campaign=Q1+2021+Bone-In&utm_source=Yelp",
    lat: 37.78512202963564, 
    lng: -122.39991470171243,
    owner_id: 4
  )

  pic8Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz8a.png')
  biz8.photo.attach(io: pic8Index, filename: 'biz8a.png')

  picShow8a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz8b.png')
  biz8.photos.attach(io: picShow8a, filename: 'biz8b.png')
  picShow8b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz8c.png')
  biz8.photos.attach(io: picShow8b, filename: 'biz8c.png')
  picShow8c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz8d.png')
  biz8.photos.attach(io: picShow8c, filename: 'biz8d.png')
  picShow8d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz8e.png')
  biz8.photos.attach(io: picShow8d, filename: 'biz8e.png')

  biz9 = Business.create!(
    name: "Terra Cotta Warrior",
    category: "Chinese",
    address: "2555 Judah St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94122",
    phone_number: "415-681-3288",
    website_url: "http://tcwus.com/",
    lat: 37.76118013597663, 
    lng: -122.48953808637037,
    owner_id: 4
  )

  pic9Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz9a.png')
  biz9.photo.attach(io: pic9Index, filename: 'biz9a.png')

  picShow9a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz9b.png')
  biz9.photos.attach(io: picShow9a, filename: 'biz9b.png')
  picShow9b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz9c.png')
  biz9.photos.attach(io: picShow9b, filename: 'biz9c.png')
  picShow9c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz9d.png')
  biz9.photos.attach(io: picShow9c, filename: 'biz9d.png')
  picShow9d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz9e.png')
  biz9.photos.attach(io: picShow9d, filename: 'biz9e.png')

  biz10 = Business.create!(
    name: "Hodala",
    category: "Taiwanese, Asian Fusion",
    address: "5801 Geary Blvd",
    city: "San Francisco",
    state: "CA",
    zip_code: "94121",
    phone_number: "415-702-9510",
    website_url: "",
    lat: 37.78018335403533, 
    lng: -122.48165211520563,
    owner_id: 4
  )

  pic10Index = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz10a.png')
  biz10.photo.attach(io: pic10Index, filename: 'biz10a.png')

  picShow10a = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz10b.png')
  biz10.photos.attach(io: picShow10a, filename: 'biz10b.png')
  picShow10b = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz10c.png')
  biz10.photos.attach(io: picShow10b, filename: 'biz10c.png')
  picShow10c = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz10d.png')
  biz10.photos.attach(io: picShow10c, filename: 'biz10d.png')
  picShow10d = open('https://mealtime-img.s3-us-west-1.amazonaws.com/biz10e.png')
  biz10.photos.attach(io: picShow10d, filename: 'biz10e.png')


  r1 = Review.create!(
    author_id: 1,
    body: "Best Dumplings ever, I also love the hand pulled noodles! Highly recommend this spot.",
    rating: 5,
    business_id: 1
  )

  r2 = Review.create!(
  author_id: 2,
  body: "Awesome Thai food spot in San Francisco! Must try! I'm allergic to peanuts",
  rating: 3,
  business_id: 2
  )

  r3 = Review.create!(
  author_id: 3,
  body: "I love ice cream, and I scream for ice cream!!!",
  rating: 4,
  business_id: 3
  )

  r4 = Review.create!(
  author_id: 1,
  body: "The skewers are amazing here, I love this place so much",
  rating: 5,
  business_id: 4
  )

  r5 = Review.create!(
  author_id: 2,
  body: "Affordable omakase but an amazing experience",
  rating: 4,
  business_id: 5
  )

  r6 = Review.create!(
  author_id: 4,
  body: "Super expensive... Would consider going back",
  rating: 3,
  business_id: 6
  )

  r7 = Review.create!(
  author_id: 1,
  body: "I love the milk they use for their milk tea",
  rating: 5,
  business_id: 7
  )

  r8 = Review.create!(
  author_id: 3,
  body: "YUM FRESHLY SLICED STEAK!!!",
  rating: 4,
  business_id: 8
  )

  r9 = Review.create!(
  author_id: 3,
  body: "Authentic Chinese food, get in my belly",
  rating: 5,
  business_id: 9
  )

  r10 = Review.create!(
  author_id: 2,
  body: "Reminds me of Taiwan, cute spot",
  rating: 4,
  business_id: 10
  )