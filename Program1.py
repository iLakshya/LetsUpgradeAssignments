# Print all the prime numbes between 1 to 200
lower = 1
upper = 200
print('Prime numbers between',lower,'and',upper,'are:')
for num in range(lower,upper):
    if num>1:
        for i in range(2,num):
            if(num%i)==0:
                break
        else:
            print(num)