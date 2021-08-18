def fatorial(n):
    if n == 0:
        return 1
    else:
        return n * fatorial(n-1)

if __name__ == "__main__":
    for i in range(7):
        print(str(i) + "!" + " = " + str(fatorial(i)))