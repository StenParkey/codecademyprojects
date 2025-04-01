# Shipping Calculator
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
    print("shipping_calc disabled. Please comment out line 4 and save to enable")