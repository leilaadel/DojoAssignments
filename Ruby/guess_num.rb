def guess_number guess
    number = 25
    if guess == 25
      puts "Correct guess"
    elsif guess > 25
      puts "too high"
    else guess < 25
      puts "too low"
    end
end

puts guess_number 5
puts guess_number 30
puts guess_number 25
