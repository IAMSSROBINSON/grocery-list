# Grocery List
A grocery list lets the user add new grocery items to a list of all items created.

## Must have
- name input 
- amount input 
- unit input 
- add to list button

## Flow
- user adds name of item e.g Flour, required entry
- user adds amount of item e.g. 100, required entry
- user add unit of item e.g. grams, default "-"
- user clicks add to list button
- inputs are validated 
- if validated, add inputs as list item to list of all items
- if validation fails inform the user of their failure and do not add item to list

## List item
- checkbox, purchased(checked, less opacity + strike-through), not purchased(un-checked)
- name
- amount
- unit
- delete button(removes item from list of items object and from the dom)

## Storage
- on DOMContentLoaded check local storage for custom data object
- if object exists then parse and load as data plus paint in the dom
- if object does not exist then set custom local storage data object

## Layout
3 main areas:
- header: logo mark, logotype
- sidebar: introText, form
- mainArea: listItemsHeading, list items
** Take a mobile first approach and expand

## Plan
- setup basic file structure / mvc
- setup basic html structure / boilerplate
- setup basic css structure / normalize

## Header
Header will contain a logo, logo will be a link back to homepage. Logo will consist of logoMarkIcon and LogoTypeText

## Data
When the DOMContent has loaded check for a custom data object: "groceryListApp". If it doesn't exist then set it.
- perform check in controller on DOMContentLoaded and update model through a method where required.
  
```JavaScript
const groceryListApp = {
    itemsList: [
        {
            id: 00001,
            name: "Lemon",
            quantity: 5,
            unit: "-",
            isChecked: false,
        },
         {
            id: 00002,
            name: "Root Beer",
            quantity: 10,
            unit: "Cans",
            isChecked: false,
        }
    ],
}
```

## Render listItems
The app has been loaded and either saved data has been set to the data source for the application or a default data object or empty data object has been set as the data source for the application.
- the view must be initiated after the model
- setup main section in html to render main section heading and main content area to render list items
- cache the dom for main content section in view
- get the data from model through controller and pass to view to render the listItems
- create components for listItems and pass the props through to render

## Delete item
When a list item delete button is clicked the item should be removed from the data source and from the UI. The UI will reflow to show the remaining list items.
- setup event in view on list-item-container
- import handle function from controller into view
- on click catch event onTarget from container, validate delete button was clicked by verifying className of delete button
- get the id of the delete buttons parent which will be the list item itself
- remove listitem from ui
- execute function from controller to model that takes an id and finds the itemObject with a matching id and removes that object from the list of all items in the data source
- when item is removed from the ui and the data source the local storage needs to be updated with the new state of the data source
- in the controller stringify the data and set it

## Checked list item
If a user clicks on the checkbox of a list item the data source needs update the property isChecked for the object that represents that list item.
If the value is true then toggle to false, if the value is false then toggle to true. This state must also be reflected in the UI each time it is changed but do not repaint the entire UI just target and update the element in question.
- user clicks on list item checkbox
- trigger event in view on list item container
- catch event on the checkbox element by confirming className in controller handler
- update from there
- id of parent element found
- locate the corresponding object from data source in model and change isChecked to opposite
- locate the element in the view via id
- find the checkbox within the element
- set the attribute checked or unchecked inline with isChecked
- update localStorage data source to reflect changes in state
  
when a checkbox is checked this indicates it has been purchased by the user, there needs to be more of a visual indicator to illustrate this. Strike through the name, the quantity and unit and gray out the text, potentially change the background color of the element also to make the item look less important. Reverse the styles when the checkbox is unchecked;

## Add to list
When the Add To List button is clicked it should collect the data from item name and quantity and validate the data. 

Prevent default initially and only submit the data if the input values are valid.

If not valid then inform the user visually on the input or on the input and via text prompt.

Could also perform live validation on each change to inputs.

- set attributes for client side validation on relevant form elements, minlength, maxlength, min, max, required
- add submit event to form in view
- add novalidate to form to handle validation manually
- add submit event to form element
- prevent default of form submission
- set a function in view to handle form validation since it is easier to do here with access to the DOM elements rather than in controller
- in html set an element at the bottom of each input that can show an error message
- get the value of the itemName input
- check validity property on the element for: 
- valueMissing, should be false for valid
- valid, should be true for element validation attributes
- tooLong, should be false for valid
- validate quantity input also for min and max, missingValue
- automate unitInput if no selection or entry is made - it is still valid as it is not a requirement

## Submit form
The inputs are now validated and the user clicks the 'Add To List +' button for the final time. The validated values now need to be turned into a list item object so that a list item element can be created in the UI.
- create a class Item {}
- the constructor should receive arguments (name, quantity, unit)
- id should be auto random generated and set in constructor also
- isChecked should be set to false by default in the constructor
- set Item.js inside js dir
- when add to list button is clicked pass props to new Item(nameValue, quantityValue, unitValue)
- this returns a new Item Object
- add this object to the data source via data.itemsList
- set up add to itemsList method in models that accepts an object
- push to data.itemsList
- update localStorage
- generate new ListItem component and append to the list container in the UI through view

## Responsive layout
Currently the application has been designed with a mobile first approach. The layout should work regardless of which device a user views it on. The layout should be responsive inline with the mock ups for mobile, tablet and desktop devices. 
- give the html a footer to complete the boilerplate
- create a mediaQueries.css file or create media queries in the relevant css files
- use the body to set a grid and manipulate the sections accordingly
