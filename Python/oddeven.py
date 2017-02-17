def odd_even():
    for counter in range(1, 2000):
        if (counter%2 == 0):
            print "Number is "+str(counter)+". this is an even number."
        else:
            print "Number is "+str(counter)+". this is an odd number."
odd_even()

def multiply(a, b):
    arrlen = len(a)
    for i in range(0,arrlen):
        a[i]=a[i]*b
    print a
    return a

multiply([2,4,10,16], 5)

# def layered_multiples(c):
#     arrlen = len(c)
#     newarr=[]
#     for i in range(0, arrlen):
#         for j in range(0, 4):
#             newarr.append(1)
#             print newarr
#
# layered_multiples(multiply([2,4,10,16], 5))
