import os
import sys

# Generate a .deploy folder with the artifacts organized as necessary

def main(invoker):
  print(f'Deployment manager: {invoker[0]}')
  for i in invoker[1:]:
    print(i)

if __name__ == "__main__":
  main(sys.argv)