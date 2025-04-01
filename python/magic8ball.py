# Magic 8-Ball program built in Python
magic_8_ball = True
# on switch down
magic_8_ball = False

import random

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
    print("magic8ball disabled. Please comment out line 4 and save to enable")