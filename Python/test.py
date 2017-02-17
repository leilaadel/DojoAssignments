
def scoregrade():
    import random
    import math
    print "Scores and Grades"
    for i in range(1, 10):
        randnum = (random.randint(1,100))
        #print randnum
        if randnum >= 90:
            print "Score:"+str(randnum)+"; Your Grade is A"
        elif randnum >= 80:
            print "Score:"+str(randnum)+"; Your Grade is B"
        elif randnum >= 70:
            print "Score:"+str(randnum)+"; Your Grade is C"
        else:
            print "Score:"+str(randnum)+"; Your Grade is D"
    print "End of the program. Bye!"

scoregrade()
