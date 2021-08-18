def bubblesort(my_array):
    for i in range(len(my_array)-1):
        for j in range(0, len(my_array)-i-1):
            if my_array[j] > my_array[j+1]:
                my_array[j], my_array[j+1] = my_array[j+1], my_array[j]
    return my_array

if __name__ == "__main__":
    array_desordenado = [5, 3, 2, 4, 7, 1, 0, 6]
    array_ordenado = bubblesort(array_desordenado)
    print(array_ordenado)

