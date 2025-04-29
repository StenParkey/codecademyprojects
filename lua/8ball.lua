question = 'Will i crash out?'
number = 4
answer = ''

if number == 1 then
  answer = 'Without a doubt'
elseif number == 2 then
  answer = 'You must see for yourself!'
elseif number == 3 then
  answer = 'Yes!'
elseif number == 4 then
  answer = 'Absolutely not'
elseif number == 5 then
  answer = 'No'
else 
  answer = 'I am not allowed to say...'
end

print(name .. ' asks:' .. '\n' .. question)
print(answer)