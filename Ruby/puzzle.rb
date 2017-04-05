x = [3,5,1,2,7,9,8,13,25,32]
sum = 0
y = ["John","KB","Oliver","Cory","Matthew","Christopher"]

puts x.reduce(:+)
puts x.reject { |number| number < 10 }

puts y.shuffle
puts y.select { |person| person.length > 5 }

abc = ("a".."z").to_a
abc.shuffle!
puts abc.last
puts abc.first

if abc.first == "a" || "e" || "i" || "o" || "u"
  puts "hey whats up hello"
end
