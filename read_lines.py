import sys

file_path = sys.argv[1]
line_num = int(sys.argv[2]) - 1

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()
    if line_num < len(lines):
        print(f"{line_num + 1}: {lines[line_num]}", end='')
    else:
        print(f"Line {line_num + 1} not found")
