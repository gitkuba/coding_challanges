from typing import List

import time


def find_zero_sum_subsequence(seq_len: int, sequence: List[int]):
    if 0 in sequence:
        return "yes"

    seq_sum = 0
    s = set()
    for i in range(seq_len):
        seq_sum += sequence[i]
        if seq_sum == 0 or seq_sum in s:
            return "yes"
        s.add(seq_sum)

    return "no"


if __name__ == "__main__":
    start = time.time()

    output = []
    with open("large.in", "r") as reader:
        num_cases = reader.readline().rstrip("\n")
        for case in range(int(num_cases)):
            seq_len = reader.readline().rstrip("\n")
            sequence = reader.readline().rstrip("\n")
            sequence = [int(n) for n in sequence.split(" ")]
            result = find_zero_sum_subsequence(seq_len=int(seq_len), sequence=sequence)
            output.append(f"{result}\n")

    with open("large.out", "w") as writer:
        writer.writelines(output)

    end = time.time()
    print(f"time: {end - start}")
