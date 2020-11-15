#!/bin/python3

import math
import os
import random
import re
import sys


class Node:

    def __init__(self, data):

        self.left = None
        self.right = None
        self.data = data

    def insert(self, data):
        if self.data:
            if data < self.data:
                if self.left is None:
                    self.left = Node(data)
                else:
                    self.left.insert(data)
            elif data > self.data:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insert(data)
        else:
            self.data = data

    def count_greater(self, number):
        if self.data <= number and self.right:
            return self.right.count_greater(number)
        elif self.data > number:
            return self.size(num=number, root=True)
        else:
            return 0

    def size(self, num, count=0, root=False):
        if self.data > num and not root:
            count += 1
        if self.left:
            count += self.left.size(num, count)
        if self.right:
            count += self.right.size(num, count)
        return count


class List:
    def __init__(self, data):

        self.data = [data]

    def insert(self, data):
        self.data.append(data)

    def count_greater(self, number):
        count = 0
        for x in self.data:
            if x > number:
                count += 1
        return count

# Complete the minimumBribes function below.
def minimumBribes(q):
    position = 1
    bribes = 0
    previous_numbers = Node(0)
    for number in q:
        position_diff = number - position
        # print(f"number {number}, position {position}, diff {position_diff}")
        if position_diff > 2:
            return 'Too chaotic'

        bribes += previous_numbers.count_greater(number)
        position += 1
        previous_numbers.insert(number)
    return bribes


if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        n = int(input())

        q = list(map(int, input().rstrip().split()))

        print(minimumBribes(q))
