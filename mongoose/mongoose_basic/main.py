def id(name, _id, age):
    print "User Identication"
    print "--------------------------------\n "
    print "Fullname : " + name
    print "Id : " , _id
    print "Age: " , age
    print "----------------------\n "

# we are involking our code 
# running the code  |  nameofFunction() |
# id('godwin yeboah',8888, 23)

def phonebook(name,phoneNum):
    print " Name : " , name
    print "phoneNumber: ", phoneNum


# phonebook('richmond','240-273-1234')
# phonebook('ralph', '203-232-534')
# phonebook('rich','123-4324-234' )
# phonebook('G','202-280-1212')

# age = 1
# # 10 > 10

# # greater  10 > 5
# >
# # greater than equal to 10 >= 10
# >=
# # less then 10 < 12
# <
# # less then equal 10 <= 10
# <=
# # 10 == 10
# ==
# #  10 is not equal 11
# # not 
# #  inverse
# !=

def drinkingAge(age):
    
    # logic 
    if age < 21:
        print "you are to young to drink"
    elif age == 21:
        print "you are of age"
    else:
        print 'you are too old'

drinkingAge(21)




 