# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Workout.destroy_all
Comment.destroy_all
# Exercise.destroy_all

PASSWORD = 'supersecret'

super_user= User.create(
  first_name: "Jon",
  last_name: 'Snow',
  email: 'js@winterfell.gov',
  password: PASSWORD,
  is_admin: true
)

10.times do 
  first_name= Faker:: Name.first_name
  last_name= Faker::Name.last_name
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name}.#{last_name}@example.com",
    password: PASSWORD
  )
end

users=User.all

created_at = Faker::Date.backward(days:365 * 5)

sample_workouts = [
  {title: "Killer arm workout",
    description: "This workout gives you a crazy pump, not for the faint of heart.",
    created_at: created_at,
    updated_at: created_at,
    user: users.sample},
  {title: "Superman chest day",
    description: "If you want the ultimate chest day you came to the right place.",
    created_at: created_at,
    updated_at: created_at,
    user: users.sample}, 
  {title: "Boulder shoulder day",
    description: "My shoulders were absolutely burning after this hellish workout... good luck.",
    created_at: created_at,
    updated_at: created_at,
    user: users.sample}, 
  {title: "Next level push day",
    description: "Ready to lift heavy stuff? Try this one out",
    created_at: created_at,
    updated_at: created_at,
    user: users.sample}, 
  {title: "Back day gives you wings",
    description: "Time to spread those wings aka your lats. You'll have trouble fitting through doorways after this one.",
    created_at: created_at,
    updated_at: created_at,
    user: users.sample}, 
  {title: "Brutal leg day",
    description: "Don't even attempt if you aren't prepared/willing to puke from the most intense leg day ever.",
    created_at: created_at,
    updated_at: created_at,
    user: users.sample}, 
  {title: "Life threatening pull day",
    description: "Rock climbing will feel like a walk in the park after you finish this destructive",
    created_at: created_at,
    updated_at: created_at,
    user: users.sample}, 
  {title: "Abnormal Ab workout",
    description: "Vicious workout targeting the abdominal region. Get ready to sweat.",
    created_at: created_at,
    updated_at: created_at,
    user: users.sample}, 
]

sample_exercises = [
  {name: "Flat bench press", sets: 5, reps:5 },
  {name: "Lat pulldown w/ cable", sets: 4, reps:6 },
  {name: "One arm dumbbell row", sets: 5, reps:6 },
  {name: "Chest flys with cables", sets: 3, reps:8 },
  {name: "Diamond pushups", sets: 4, reps:12 },
  {name: "Wide grip pullups", sets: 3, reps:10 },
  {name: "Seated military shoulder press", sets: 5, reps:5 },
  {name: "Situps", sets: 4, reps:20 },
]

sample_comments = [
  {body: "Wow that was insane, highly recommended.", user: users.sample},
  {body: "I can't believe I just put myself through that, almost puked", user: users.sample},
  {body: "This person is training like a psycho... looking forward to more!", user: users.sample},
  {body: "Amazing workout, well done!", user: users.sample},
  {body: "Felt like my first day of PT in the military!", user: users.sample},
  {body: "Great workout for beginners.", user: users.sample},
  {body: "Beginners do not even attempt...", user: users.sample},
]

sample_workouts.map do |workout|
  
  w = Workout.create(workout)
  if w.persisted?
    w.exercises = sample_exercises.map do |exercise|
      Exercise.new(exercise)
    end
    w.comments = sample_comments.map do |comment|
      Comment.new(comment)
    end
  end
end

puts ("---Generated #{users.count} users---")
puts ("---Generated #{Workout.count} workouts---")
puts ("---Generated #{Exercise.count} exercises---")
puts ("---Generated #{Comment.count} comments---")
