#1 
# Delete Starting Even Number
# The function should remove elements from the front of lst until the front of the list is not even. The function should then return lst.
# For example if lst started as [4, 8, 10, 11, 12, 15], then delete_starting_evens(lst) should return [11, 12, 15].

def delete_starting_evens(lst):
  while (len(lst) > 0 and lst[0] % 2 == 0):
    lst = lst[1:]
  return lst

print(delete_starting_evens([4, 8, 10, 11, 12, 15]))
print(delete_starting_evens([4, 8, 10]))


#2 
# The function should create a new empty list and add every element from lst that has an odd index. The function should then return this new list.
# For example, odd_indices([4, 3, 7, 10, 11, -2]) should return the list [3, 10, -2].
def odd_indices(lst):
  newLst = []
  for i in range(1, len(lst), 2):
    newLst.append(lst[i])
  return newLst


#Uncomment the line below when your function is done
print(odd_indices([4, 3, 7, 10, 11, -2]))


#3 Create a function named exponents() that takes two lists as parameters named bases and powers. Return a new list containing every number in bases raised to every number in powers.
def exponents(bases, powers):
  newLst = []
  for base in bases:
    for power in powers:
      newLst.append(base ** power)
  return newLst


print(exponents([2, 3, 4], [1, 2, 3]))


#4 
#Create a function named larger_sum() that takes two lists of numbers as parameters named lst1 and lst2.
#The function should return the list whose elements sum to the greater number. If the sum of the elements of each list are equal, return lst1.
def larger_sum(lst1, lst2):
  sum1 = sum(lst1)
  sum2 = sum(lst2)
  if sum1 >= sum2:
    return lst1
  else:
    return lst2
    
print(larger_sum([1, 9, 5], [2, 3, 7]))

#5
# Create a function named over_nine_thousand() that takes a list of numbers named lst as a parameter.
# The function should sum the elements of the list until the sum is greater than 9000. When this happens, the function should return the sum. If the sum of all of the elements is never greater than 9000, the function should return total sum of all the elements. If the list is empty, the function should return 0.
# For example, if lst was [8000, 900, 120, 5000], then the function should return 9020.
def over_nine_thousand(lst):
  sum = 0
  for num in lst:
    sum += num
    if sum > 9000:
      break
  return sum

print(over_nine_thousand([8000, 900, 120, 5000]))





