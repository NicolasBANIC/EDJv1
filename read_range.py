import sys

file_path = sys.argv[1]
start_line = int(sys.argv[2]) - 1
end_line = int(sys.argv[3])

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()
    for i in range(start_line, min(end_line, len(lines))):
        print(f"{i + 1}: {lines[i]}", end='')
