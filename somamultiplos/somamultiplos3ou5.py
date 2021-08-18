def somamultiplos3ou5(x):
    return sum([multiplo for multiplo in list(range(x)) if multiplo % 3 == 0 or multiplo % 5 == 0])

if __name__ == "__main__":
    print(somamultiplos3ou5(10))