# Basics of *args and **kwargs.
# Sum of integers using *args
def my_sum(*args):
    result = 0
    # Iterating over the Python args tuple
    for x in args:
        result += x
    return result
print(my_sum(1, 2, 3))


# Concatenate using **kwargs
def concatenate(**kwargs):
    result = ""
    # Iterating over the Python kwargs dictionary
    for arg in kwargs.values():
        result += arg
    return result
print(concatenate(a="Real", b="Python", c="Is", d="Great", e="!"))