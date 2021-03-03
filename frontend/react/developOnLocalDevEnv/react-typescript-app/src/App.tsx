//Commenting out the below line that was generated by create-react-app, because
//VS code warns us that this import is not being used:
//import React from 'react';

//Wow, even .svg files can be imported! But even this Ctrl+Click navigation does
//not work as expected; rather we get navigated to some other file that seems to
//declare typescript/React support for svg:
import logo from './logo.svg';

// Expected:css import will allow for validation of css classes etc. mentioned
// in JSX?
import './App.css';

/**
 * Represents the Application (App)'s root React UI Component.
 * A react component can be a class or a constructor function whose output is
 * a JSX Element.
 */
function App() {
  return (
    //Some JSX validation e.g. tag balancing, tag name validation etc. is done
    //with results showing up immediately in VS code problems view.
    <div className="App">
      {/* Ideally a header tag should be place inside an article tag. And the
      article tag should end with its last child being a footer tag....
      https://www.w3schools.com/tags/tag_header.asp*/
      }
      <header className="App-header">
        {/* unfortunately Ctrl+click on 'logo' browses to React/Typescript
            declarations for svg support rather than the actual
            declaration/definition of 'logo' that is present above in this same
            file!
        */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* unfortunately changing the css class name below to something
        non-existent, does not immediately trigger a problem in VS code problems
        view. Also note that we cannot add comments after each attribute; the
        comment must come before the entire tag.

        target="_blank" ensures that when the link is clicked, the content is
        opened in a new tab.

        https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable
        Links with target="_blank" on them are vulnerable to having the referrer
        page being swapped out in the background while the user's attention is
        diverted by the newly-opened tab. This is known as reverse tabnapping:

        Basically rel="noopener noreferrer" is used to improve the security of
        the website, and should always be used with target="_blank"
        */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;