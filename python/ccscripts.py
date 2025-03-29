import random

magic_8_ball = True
# on switch down
magic_8_ball = False
if magic_8_ball == True:
    print("Magic 8-Ball Enabled")
    
    name = ''
    question = '?'
    answer = ''

    random_number = random.randint(1, 10)
    #print(random_number)    

    if random_number == 1:
        answer = 'Yes - definitely'
    elif random_number == 2: 
        answer = 'It is decidedly so'
    elif random_number == 3: 
        answer = 'Without a doubt'
    elif random_number == 4: 
        answer = 'Reply hazy, try again'
    elif random_number == 5: 
        answer = 'Ask again later'
    elif random_number == 6:
        answer = 'Better not tell you now'
    elif random_number == 7:
        answer = 'My sources say no'
    elif random_number == 8:
        answer = 'Outlook not so good'
    elif random_number == 9:
        answer = 'Very doubtful'
    elif random_number == 10:
        answer = 'YAS DIVA'
    else:
        answer = 'Error'

    if question == '':
        print('Error please input question')
    elif name == '':
        print('Question: ' + question)
        print("Magic 8-Ball's answer: " + answer)
    else:
        print(name + ' asks: ' + question)
        print("Magic 8-Ball's answer: " + answer)
else:
    print("magic8ball disabled. Please comment out line 5 and save to enable")

shipping_calc = True
# on switch down
shipping_calc = False
if shipping_calc == True:
    print("Shipping Calculator Enabled")
    
    weight = 41.5

    #Ground Premium
    cost_ground_premium = 125.00
    print("Ground Shipping Premium $", cost_ground_premium)

    #Ground Shipping
    ground_shipping_flat = 20.00
    if weight <= 2:
        print("Ground Shipping Base Cost: $", weight * 1.50 + ground_shipping_flat)
    elif (weight > 2) and (weight <= 6):
        print("Ground Shipping Base Cost: $", weight * 3.00 + ground_shipping_flat)
    elif (weight > 6) and (weight <= 10):
        print("Ground Shipping Base Cost: $", weight * 4.00 + ground_shipping_flat)
    elif weight > 10:
        print("Ground Shipping Base Cost: $", weight * 4.75 + ground_shipping_flat)
    else:
        print('error, please input a valid weight')

    #Drone Shipping
    if weight <= 2:
        print("Drone Shipping Base Cost: $", weight * 4.50)
    elif (weight > 2) and (weight <= 6):
        print("Drone Shipping Base Cost: $", weight * 9.00)
    elif (weight > 6) and (weight <= 10):
        print("Drone Shipping Base Cost: $", weight * 12.00)
    elif weight > 10:
        print("Drone Shipping Base Cost: $", weight * 14.25)
    else:
        print('error, please input a valid weight')
else: 
    print("shipping_calc disabled. Please comment out line 51 and save to enable")