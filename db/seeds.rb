# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all;
Bench.destroy_all;

u1 = User.create!(username: "username", password: "password")

b1 = Bench.create!(description: "Ghirardelli Square", lat: 37.808288, lng: -122.422763)
b2 = Bench.create!(description: "Temple 🙏", lat: 37.788176, lng: -122.397204)
b3 = Bench.create!(description: "Westfield Mall", lat: 37.784388, lng: -122.406850)
