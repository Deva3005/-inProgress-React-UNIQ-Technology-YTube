import A99CheckRoot from "./components/00Components/A99CheckRoot";
import CheckStyle from "./components/01StylingComponents/CheckStyle";
import CheckEventsRoot from "./components/02Events/CheckEventsRoot";
import CheckUseStateRoot from "./components/03UseState/CheckUseStateRoot";
import CheckCondiRenders from "./components/04ConditionalRenders/CheckCondiRenders";
import CheckPropParent from "./components/05Properties/CheckPropParent";
import X01ParentShop from "./components/06ContextAPI/X01ParentShop";
import X01Lists from "./components/07ListsAndKeys/X01Lists";
import X1ControlledInTodoApp from "./components/08ControlledInputTodoApp/X1ControlledInTodoApp";
import Workshop00 from "./components/Workshop00";
// ...................................................................
// Class Components
//....................................................................
import X0ClassProps from "./exploreClass/00classProps/X0ClassProps";
// ...................................................................
// Project Components
//....................................................................
import State from "./projectComponents/workshop/useStateProject/State";
import TNClassRoot from "./projectComponents/workshop/TNClassProject1/TNClassRoot";

function App() {
  return (
    <>
      {/* <h1>🏃‍♂️ React Dev Space is Running 👟</h1> */}
      
      {/* 00 Components */}
      
      {/* Class[stateful][extends react get methods], functional[stateless][Hooks to have State Management] */}
      {/* Props :: Properties everything given to Components [parent props are immutable...] */}
      
      {/* <A99CheckRoot /> */}

      {/* 01 Styling JSX */}
      {/* Inline, Style Object, ClassName: module.css, styled-components */}
      
      {/* <CheckStyle /> */}

      {/* 02 Events In JSX */}
      {/* States :: Data used within the components Managed via Hooks in Fn Components */}
      
      {/* <CheckEventsRoot /> */}

      {/* 03 Use State [StateManagement] */}
      {/* Function call with () in Component called all the time if page re-render | use function Reference OR Anonymous Function  */}
      {/* useState setValue(value) >> use Batch update // Means Value is taken from UI and Update is batched for whole Event Driven Function
       so Use Functional Updater setValue((value)=>value+1) // Check and Get the current value */}
      
      {/* <CheckUseStateRoot /> */}

      {/* 04 Conditional Rendering */}
      {/* Single Component Conditions use [Ternary Operators or && and Operators] */}
      {/* Multiple conditions use [if-else or switch] outside the Component return key */}
      
      {/* <CheckCondiRenders currentState="Warning" /> */}

      {/* 05 Props | Properties from Parent to Child [read-only data] | 
          Prop-Drilling [Not Recommended Use Context-API global state management useContext, CreateContext, Context.Producer] | 
          Prop-Type validation [wont work now in vite dev env]| 
          Default Props [deprecated] | Default Prop Parameters */}
      
      {/* <CheckPropParent /> */}

      {/* 06 Context-API : send data to deep Child Component
              Global level data
                Creator : createContext() and Export it [named export]
                Provider: wrap Context.provider ::> used in Parent Component
                Consumer: Context.consumer ::> used in Childclass |> UseContext used in Child Functional Component
            To be good 
              always useStates instead of normal js variables
              Use Functional Updater [arrow function wrapped setState]
              Use Object Destructure to FLEX because Object is not a proper REACT Child...
            
      */}
      
      {/* <X01ParentShop /> */}
      
      {/* 4:00:00 out of 12:55:04 [1/3 Completed...]*/}

      {/* 07 Rendering List and Keys */}
      {/* Using Higher Order Array methods inside JSX to Iterations and Manipulation */}
      {/* Keys are Unique Identifier to avoid unwanted re-renders in list */}

      {/* <X01Lists /> */}

      {/* Inputs fields like checkbox, textbox, range which are bind to component as state and controlled by react
      is known as Controlled Components */}
      <X1ControlledInTodoApp />

      {/* Tryouts... */}
      {/* <Workshop00 /> */}

      {/* ................................................ */}

      {/* Class Component Inherit React.Component to get some UI Render Methods
          Class Components are called as Stateful component
          here the '''Render()''' method is over-written and return JSX
          JSX - HTML Fragment : Build Block of UI
          '''this.variable_name''' to access variable inside the class use 'this' keyword
          in Child Components by Default 'props' is available... > this.props.parent_given_property
      */}

      {/* <X0ClassProps /> */}
      {/* Object Destructuring */}
      {/* let info = {name:"Deva",age:28} | Object */}
      {/* let {name, age} = info | Object Destructured | Value should match with extact key identifier */}

      {/* ................................................ */}

      {/* Projects */}
      {/* Use State Project recreated from jany repo */}
      {/* <State /> */}
      {/* Class Project with React Bootstrap classes and  */}
      {/* <TNClassRoot /> */}
    </>
  );
}

export default App;
