debugPotionDescription = 'Debug Potion - An expulsion type potion, great for evicting bugs.'
debugPotionPrice = 404
loopPotionDescription = 'Loop Potion - A repetition type potion, effective for menial tasks.'
loopPotionPrice = 222
bytePotionDescription = 'Byte Potion - A healing potion. Used to salve bites.'
bytePotionPrice = 101
salesTax = 0.07
addedTax = 0

customerTotal = 0
customerItemization = ''
customerItemizationTotal = 0
purchasedItemAmount = 0
addedTax = customerTotal * salesTax
customerTotal = customerTotal + addedTax

customerTotal = customerTotal + debugPotionPrice
customerItemizationTotal = customerItemizationTotal + 1
customerItemization = customerItemization .. debugPotionDescription

customerTotal = customerTotal + bytePotionPrice
customerItemizationTotal = customerItemizationTotal + 1
customerItemization = customerItemization .. "\n" .. bytePotionDescription



print('Customer Item(s):' .. "\n" .. customerItemization .. "\n" .. 'Customer Total:' .. customerTotal)

