import random

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
symbols = "[]{}()*;/,_-"

all = lower + upper + numbers + symbols
length = int(input("Enter Length of Password: ")) # Length should be 74 or less, because there are only 74 characters to choose from.

password = "".join(random.sample(all, length))

print(password)
