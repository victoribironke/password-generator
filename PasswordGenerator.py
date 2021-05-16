import random

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
symbols = "[]{}()*;/,_-"

all = lower + upper + numbers + symbols
while True:
    try:
        length = int(input("Enter Length of Password: "))
        break
    except ValueError:
        print("Please select a number equal to or less than 74.")

password = "".join(random.sample(all, length))

print(f"Your password is {password}")
