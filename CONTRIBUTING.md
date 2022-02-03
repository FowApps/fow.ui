## Styleguides

### Git commit messages

-   Use the present tense ("Add feature" not "Added feature"). Think always "this commit will fix/add smt".
-   Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
-   Limit the first line to 72 characters or less

### JS Styleguide

-   All JavaScript code is linted with ESLint/Prettier(please install ESLint and Prettier VS Code extension).
-   Prefer the object spread operator ({...anotherObj})
-   Don't use var declaration. Use const/let.
-   Prefer arrow functions.
-   For boolean props, use is/has/can prefix, example **is**Open, **has**Value, **can**Execute etc. not use negative **isNot**Open, **hasNot**Value
-   For function props, use on prefix, example **on**Click, or **on**CustomEventName.
-   For array props, use plurals. example item**s**, notification**s**, not notificationList, itemList.

### Component Styleguide

-   Always components file extensions must be .tsx.
-   Don't use iteration index for keys. Use uniq ids.
-   Every component should have a story.
-   All prop types must be declared.
-   Each type should have a short description.
-   If component does not have children, use self-closing.(<Col prop={...}/> not <Col prop={...}></Col>)
-   Don't use inline styling.
-   use rem for css unit. in all project 1 rem = 10px.