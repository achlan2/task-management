# Solution Architecture

This is more details about subtasking and target of this application.

## Summary

Task management using kanban board


### Target

- User can create a task in each of the given board.
- User can move a task from one board to another with the action "Move Left" and "Move Right".
- User can edit a task with the action "Edit".
- User can delete a task with the actin "Delete".
- After each action (create, move, edit, and delete), the board should show their newest task accordingly.
- Apply drag and drop mechanism to move a task between the board (optional)




## Breakdown task

### Apps V1

This version apps directly get data from API without global state management.

#### Subtask:

##### 1. Create Components
  * Main Page
  * Container Board
  * Board Component
  * Main Board
  * Add Button Section
  * Card Component
  * Popup Component
  * Handle Popup Content (right/left button)
  * Popup Overlay Component
  * Modal Container (react-portal)
  * Modal Overlay
  * Form Manage Task (Add/Edit)
  * Modal Delete

#### 2. Create Function

 * Setup API axios & token.
 * Fetch Board function.
 * Fetch task per Board function.
 * Create task function.
 * Remove task function.
 * Edit task function.
 * Move task to left board function.
 * Move task to right board function.
 * Close modal using action in overlay.

*every function must be attached to components first when created.

### Apps V2

This apps using global state to manage data

#### Subtask:
* Create custom provider using react context.
* Create a function that can load data board from data API & store to state.
* Implement data board state to screen.
* Create a function that can load entire data task API from every board into single state.
* Implement load data task functions to send data state to screen.
* Create a function that can create task & store to state.
* Implement create data functions & new card must be added.
* Create a function that can remove a task from state.
* Implement remove task function & removed card must be disappeared.
* Create a function that can edit a task from state.
* Implement edit task function & task card content must be changed.
* Create a function that can move tasks to the board on the left.
* Create a function that can move tasks to the board on the right.
* Implement move functions & make sure the task moved correctly.
* Implement API interaction with those function above 

### Break
* Comparing apps with design
* Check if apps run correctly

### Apps V3
This apps using Drag and drop function

* Research package
* Setup package
* Modify component
* Create drag and drop function that can change data state position.
* Implement function above into component
* Implement API interaction

### Deploy
* Setup env
* Setup netlify
* Test apps manually
* Comparing with design



### Bugs
* app still can drag and move card to same board with different position(index). but when the browser restarts, card position back as before. This happens because the API has not provided an endpoint for the card to switch indexes with the same board