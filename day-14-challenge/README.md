## 13: Whiteboard Challenge
###Requirements
Create a function that accepts a linked list and a "find" value as it's input. Your function should "find" the node value you passed it and should delete the node from the list. Your list should remain interconnected after the removal.

// given the following:

const ll = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

removeNode(ll, 2);

// return the following:

{
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}
Submission Instructions
With your assigned partner, pseudocode your solution on the whiteboard. Take a picture of your proposed solution for your repo.
Make a new branch and folder in your whiteboard challenge repository on GitHub. The name of the folder should be the same as the name of the challenge.
This folder should contain:
A file named solution.js which contains the JavaScript solution
A __test__ directory that includes your solution.test.js file and associated tests
A picture of your pseudocoded solution from the whiteboarding exercise
A README.md which includes the problem domain
Complete the whiteboard challenge in your text editor, and verify that it's functional
Make a pull request from your working branch to your master branch
Submit a link to your PR on Canvas or submit a link to your repo/daily-whiteboarding-directory/solution.js