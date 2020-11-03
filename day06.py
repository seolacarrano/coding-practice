#1 
# Create a function named max_num() that takes a list of numbers named nums as a parameter.
#The function should return the largest number in nums

def max_num(nums):
  maximum = nums[0]
  for i in range(len(nums)) :
    if nums[i] > maximum:
      maximum = nums[i]
  return maximum
   

print(max_num([50, -10, 0, 75, 20]))

#2
# Write a function named same_values() that takes two lists of numbers of equal size as parameters.
# The function should return a list of the indices where the values were equal in lst1 and lst2.
def same_values(lst1, lst2):
  lst = []
  for index in range(len(lst1)):
    for index in range(len(lst2)):
      if lst1[index] == lst2[index]:
        lst.append(index)
    return lst


print(same_values([5, 1, -10, 3, 3], [5, 10, -10, 3, 5]))


#3
# Create a function named reversed_list() that takes two lists of the same size as parameters named lst1 and lst2.
# The function should return True if lst1 is the same as lst2 reversed. The function should return False otherwise.
# For example, reversed_list([1, 2, 3], [3, 2, 1]) should return True.
def reversed_list(lst1, lst2):
  for index in range(len(lst1)):
    if lst1[index] != lst2[len(lst2) - 1 - index]:
      return False
  return True

print(reversed_list([1, 2, 3], [3, 2, 1]))
print(reversed_list([1, 5, 3], [3, 2, 1]))



