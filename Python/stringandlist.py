#find and replace
str = "If monkeys like bananas, then I must be a monkey!"
print str
print str.find("monkey")
print str.replace("monkey", "alligator")

#min and max
x = [2,54,-2,7,12,98]
print x
print min(x)
print max(x)

#first and last
x = ["hello",2,54,-2,7,12,98,"world"]
y = []
print x
print x[0]
y.append(x[0])
print x[len(x)-1]
y.append(x[len(x)-1])
print y

#new list
#print "new list"
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
print x
z = []
for count in x:
    if count < 0:
        z.append(count)
        x.remove(count)
        z.append(-2)
        x.pop(0)
x.insert(0, z)
print x
