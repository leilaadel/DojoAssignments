#multiples
#part 1
counter = 1
count5 = 5
for counter in range(1, 1000):
    print "looping -", counter

#part 2
while count5 < 1000000:
    print count5
    count5 = count5 + 5

#Sum list
a = [1, 2, 5, 10, 255, 3]
sum = 0
for i in a:
    #print i
    sum = sum + i
print "sum of all values equals", sum

#Average list
a = [1, 2, 5, 10, 255, 3]
sum = 0
avg = 0
for i in a:
    #print i
    sum = sum + i
avg = sum/len(a)
print "the average of the values is", avg
