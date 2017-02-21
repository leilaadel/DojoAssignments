class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = .15
        else:
            self.tax = .12
        self.display_all()
    def display_all(self):
        print "price: "+str(self.price)
        print "speed: "+str(self.speed)
        print "fuel: "+str(self.fuel)
        print "mileage: "+str(self.mileage)
        print "tax: "+str(self.tax)

car1 = Car(100, 200, 300, 400)
car2 = Car(50000, 60000, 700000, 8000000)
car3 = Car(6546, 5465498,5684,54654)
car4 = Car(5465,845168,6548456,6546848)
car5 = Car(548,315,5348,213)
car6 = Car(1,2,3,4)
