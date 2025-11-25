import sys

file_path = sys.argv[1]
num_lines = int(sys.argv[2]) if len(sys.argv) > 2 else 30

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()
    start = max(0, len(lines) - num_lines)
    for i in range(start, len(lines)):
        print(f"{i + 1}: {lines[i]}", end='')
