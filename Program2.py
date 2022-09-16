# To find basic statistical data such as mean, median, variance 

# Mean
numbers = [4,10,29,33,42,67]
def find_num(list_of_numbers):
    sum_n = sum(list_of_numbers)
    len_n = len(list_of_numbers)
    mean = sum_n/len_n
    return mean
print("Mean is:",find_num(numbers))

# Median
numbers_even = [4,10,29,33,42,67]
numbers_odd = [4,10,29,33,42,67,99]
def find_median(list_of_numbers):
    list_of_numbers.sort()
    length = len(list_of_numbers)
    length_is_odd = True if length % 2 == 0 else False
    if length_is_odd:
        index = length//2
        median = list_of_numbers[index]
    else:
        index_1 = length//2
        index_2 = index_1 + 1
        median = (list_of_numbers[index_1]+list_of_numbers[index_2])/2
        return median
print("Median of even numbers is:",find_median(numbers_even))
print("Median of odd numbers is:",find_median(numbers_odd))

# Mode
n = [4,4,4,4,6,6,6,6,6,6,8,8,8,8,9,10,2,2,2,2,2,2,2,2,2,2]
def calculate_mode(list_of_numbers):
    counter = {}
    for i in list_of_numbers:
        if i in counter:
            counter[i]+=1
        else:
            counter[i]=1
    key_max = sorted(counter, key=counter.get, reverse=True)[:1][0]
    frequency = counter[key_max]
    return key_max, frequency
print("Mode is:",calculate_mode(n))

# min, max and range
numbers = [4,10,29,33,42,-67]
def find_range(list_of_numbers):
    n_min = min(list_of_numbers)
    n_max = max(list_of_numbers)
    n_range = n_max - n_min
    return n_min, n_max, n_range
print("Min, Max and Range is:",find_range(numbers))

# Plotting correlation and printing correlation
import matplotlib.pyplot as plt
array_x = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
array_y = [11,5,17,91,9,0,16,1,15,6,10,13,14,12,7,3,8,2,18,4]
def find_correlation(x,y):
    length = len(x)
    # sum of products
    products = [x_i*y_i for x_i, y_i in zip(x,y)]
    sum_products = sum(products)
    sum_x = sum(x)
    sum_y = sum(y)
    squared_sum_x = sum_x**2
    squared_sum_y = sum_y**2
    # x squared and sum
    x_sq = [x_i**2 for x_i in x]
    x_sq_sum = sum(x_sq)
    #y squared and sum
    y_sq = [y_i**2 for y_i in y]
    y_sq_sum = sum(y_sq)
    # calculate correlation according to the formula
    numerator = length*sum_products - sum_x*sum_y
    denominator_term1 = length*x_sq_sum - squared_sum_x
    denominator_term2 = length*y_sq_sum - squared_sum_y
    denominator = (denominator_term1*denominator_term2)**0.5
    corr = numerator/denominator
    return corr
print(find_correlation(array_x,array_y))
plt.plot(array_x,array_y,marker="o")
plt.show()