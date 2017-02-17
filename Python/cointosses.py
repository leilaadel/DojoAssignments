def cointoss():
    import random
    import math
    heads = 0
    tails = 0
    attempt = 0
    for i in range(1, 5001):
        randnum = (random.randint(1,2))
        if randnum == 1:
            heads = heads + 1
            attempt = attempt + 1
            print "Attempt #"+str(attempt)+": Throwing a coin... It's a head! ... Got "+str(heads)+" head(s) so far and "+str(tails)+" tail(s) so far"
        else:
            tails = tails + 1
            attempt = attempt + 1
            print "Attempt #"+str(attempt)+": Throwing a coin... It's a head! ... Got "+str(heads)+" head(s) so far and "+str(tails)+" tail(s) so far"
    print "Ending the program, thank you!"
cointoss()
