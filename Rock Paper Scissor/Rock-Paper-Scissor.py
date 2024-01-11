 import random

game = ["rock","paper","scissor"]

while True:
  person = None
  computer = random.choice(game)

  while person not in game:
    person = input("rock, paper, scissor? : ").lower()

  if person == computer:
    print("Computer's Choice : " + computer)
    print("Your Choice : "+person)
    print("Tie!!")

  elif person == "rock":
    if computer == "paper":
      print("Computer's Choice : "+computer)
      print("Your Choice : "+person)
      print("You Lose!!")

    elif computer == "scissor":
      print("Computer's Choice : "+computer)
      print("Your Choice : "+person)
      print("You Won!!")

  elif person == "paper":
    if computer == "scissor":
      print("Computer's Choice : "+computer)
      print("Your Choice : "+person)
      print("You Lose!!")

    elif computer == "rock":
      print("Computer's Choice : "+computer)
      print("Your Choice : "+person)
      print("You Won!!")

  elif person == "scissor":
    if computer == "rock":
      print("Computer's Choice : "+computer)
      print("Your Choice : "+person)
      print("You Lose!!")

    elif computer == "paper":
      print("Computer's Choice : "+computer)
      print("Your Choice : "+person)
      print("You Won!!")

  response = input("Do you want to play again? (yes/no) : ").lower()

  if response != "yes":
    break
