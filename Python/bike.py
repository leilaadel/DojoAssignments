class Bike(object):
    def __init__(self, price, max_speed, miles=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def displayInfo(self):
        print "the price is: "+str(self.price)
        print "the max speed is: "+str(self.max_speed)
        print "total miles are: "+str(self.miles)
        return self
    def ride(self):
        print "Riding"
        self.miles = self.miles + 10
        return self
    def reverse(self):
        print "Reversing"
        if self.miles > 5:
            self.miles = self.miles - 5
        else:
            self.miles = 0
        return self

print "this is the first instance"
motorcycle1 = Bike(200, 100)
motorcycle1.ride().ride().ride().reverse().displayInfo()

print "this is the second instance"
motorcycle1 = Bike(100, 25)
motorcycle1.ride().ride().reverse().reverse().displayInfo()

print "this is the third instance"
motorcycle1 = Bike(20, 250)
motorcycle1.reverse().reverse().reverse().displayInfo()
