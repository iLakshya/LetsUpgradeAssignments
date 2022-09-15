rows = int(input("Enter the number of rows: "))
columns = int(input("Enter the number of columns: "))
matrix = []
print("Please give the entries row-wise: ")
for i in range(rows):
    r = []
    for j in range(columns):
        r.append(int(input()))
    matrix.append(r)
for i in range(rows):
    for j in range(columns):
        print(matrix[i][j], end = " ")
    print()