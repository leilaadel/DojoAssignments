class Animal(object):
    def __init__(self, name, health=100):
        self.name = name
        self.health = health

    def walk(self):
        self.health = self.health - 1
        return self

    def run(self):
        self.health = self.health - 5
        return self

    def displayHealth(self):
        print self.name
        print self.health
        return self

animal1 = Animal("Bob")
animal1.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    health = 150
    def pet(self):
        self.health = self.health + 5
        return self

dog1 = Dog("woofle")
dog1.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    health = 170
    def fly(self):
        self.health = self.health - 10
        return self

    def displayHealth(self):
        super(Dragon, self).displayHealth()
        print "This is a Dragon"
        return self

dragon1 = Dragon("fireface")
dragon1.walk().walk().walk().run().run().fly().fly().displayHealth()
