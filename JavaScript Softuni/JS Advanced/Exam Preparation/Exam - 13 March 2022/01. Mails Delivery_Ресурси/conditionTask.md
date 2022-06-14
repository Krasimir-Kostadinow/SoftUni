JS Advanced Exam – 13 March 2022
Problem 1. Mails Delivery
Environment Specifics
Please, be aware that every JS environment may behave differently when executing code. Certain things that work in the browser are not supported in Node.js, which is the environment used by Judge.
The following actions are NOT supported:
•	.forEach() with NodeList (returned by querySelector() and querySelectorAll())
•	.forEach() with HTMLCollection (returned by getElementsByClassName() and element.children)
•	Using the spread-operator (...) to convert a NodeList into an array
•	append() in Judge (use only appendChild())
•	replaceWith() in Judge
•	replaceAll() in Judge
•	closest() in Judge
•	replaceChildren()
•	Always turn the collection into a JS array (forEach, forOf, et.)
If you want to perform these operations, you may use Array.from() to first convert the collection into an array. 
Use the provided skeleton to solve this problem.
Note: You can't and you have no permission to change directly the given HTML code (index.html file).
 
Your Task
Write the missing JavaScript code to make the Mails Delivery work as expected:
1.	Getting the information from the form
 
•	All fields are non-empty strings. If any of them are empty, the program should not do anything.
•	When you click the ["Add to the List"] button, the information from the input fields must be added to the ul in div with class ="list-mails", and inputs must be cleared. The structure must be:
 
•	The Title and Recipient Name must be saved in the h4 tag and the message in the span tag.
•	The Buttons - Send and Delete - are in div with id="list-action".


 
•	When you click ["Reset"], the information from the inputs should be cleared, without any other changes.
2.	Send Mails
•	When the ["Send"] button is clicked, the information must be sent to the Sent Mails and the li tag should be deleted from the List of Mails.
 
•	The structure must be:
 
•	The Title and Recipient Name must both be saved in the span tag.
•	The Button, Delete, is in div with class="btn".
3.	Delete Mails
•	When you click the ["Delete"] button, the information on either the List of mails or the Sent mails div, the information must be sent to the Delete Mails and the record should be deleted from the List of Mails or Sent Mails.
 
 
 
•	The structure must be:
 
Submission
Submit only your solve() function.
GOOD LUCK… ?
