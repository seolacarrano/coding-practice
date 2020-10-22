#1 
# Write a function named append_sum that has one parameter — a list named named lst.
# The function should add the last two elements of lst together and append the result to lst. It should do this process three times and then return lst.
# For example, if lst started as [1, 1, 2], the final result should be [1, 1, 2, 3, 5, 8].

# solution #1
def append_sum(a):
  lst = a

  num1 = lst[-1]
  num2 = lst[-2]
  sum1 = num1 + num2
  lst.append(sum1)

  
  num1 = lst[-1]
  num2 = lst[-2]
  sum2 = num1 + num2
  lst.append(sum2)

 
  num1 = lst[-1]
  num2 = lst[-2]
  sum3 = num1 + num2
  lst.append(sum3)


  return lst

print(append_sum([1, 1, 2]))

# solution #2
def append_sum(a):

  sum1 = (a[-1]+a[-2])
  a.append(sum1)


  sum2 = (a[-1]+a[-2])
  a.append(sum2)

  sum3 = (a[-1]+a[-2])
  a.append(sum3)

  return a

print(append_sum([1, 1, 2]))



#2
# Write a function named larger_list that has two parameters named lst1 and lst2.
# The function should return the last element of the list that contains more elements. If both lists are the same size, then return the last element of lst1.

def larger_list (lst1, lst2):
  a = len(lst1)
  b = len(lst2)

  if a>b:
    return lst1[-1]
  elif b>a:
    return lst2[-1]
  else:
    return lst1[-1]

print(larger_list([4, 10, 2, 5], [-10, 2, 5, 10]))


def larger_list(lst1, lst2):
    if len(lst1) >= len(lst2):
        return lst1[-1]
    else:
        return lst2[-1]
    
print(larger_list([4, 10, 2, 5], [-10, 2, 5, 10]))


#3
# Create a function named more_than_n that has three parameters named lst, item, and n.
# The function should return True if item appears in the list more than n times. The function should return False otherwise.

def more_than_n (lst, item, n):
  if n < lst.count(item):
    return True
  else:
    return False


print(more_than_n([2, 4, 6, 2, 3, 2, 1, 2], 2, 3))

#4
# Create a function called append_size that has one parameter named lst.
# The function should append the size of lst (inclusive) to the end of lst. The function should then return this new list.
# For example, if lst was [23, 42, 108], the function should return [23, 42, 108, 3] because the size of lst was originally 3.

def append_size(lst):
  a = len(lst)
  lst.append(a)
  return lst

print(append_size([23, 42, 108]))


#5
# Write a function named combine_sort that has two parameters named lst1 and lst2.
# The function should combine these two lists into one new list and sort the result. Return the new sorted list.
def combine_sort(lst1, lst2):
  sum = lst1 + lst2
  sum.sort()
  return sum

print(combine_sort([4, 10, 2, 5], [-10, 2, 5, 10]))








