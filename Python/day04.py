#1 Create a function named divisible_by_ten() that takes a list of numbers named nums as a parameter.
#Return the count of how many numbers in the list are divisible by 10.

def divisible_by_ten(nums):
  counter = 0;
  for num in nums:
    if num%10 == 0:
      counter += 1;
  return counter

print(divisible_by_ten([20, 25, 30, 35, 40]))



#2 Create a function named add_greetings() which takes a list of strings named names as a parameter.
# In the function, create an empty list that will contain each greeting. Add the string "Hello, " in front of each name in names and append the greeting to the list.
# Return the new list containing the greetings.

def add_greetings(names):
  greeting = ["Hello, " + name for name in names]
  return greeting

#Uncomment the line below when your function is done
print(add_greetings(["Owen", "Max", "Sophie"]))