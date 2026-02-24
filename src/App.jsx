import A99CheckRoot from "./components/00Components/A99CheckRoot";
import CheckStyle from "./components/01StylingComponents/CheckStyle";
import CheckEventsRoot from "./components/02Events/CheckEventsRoot";
import CheckUseStateRoot from "./components/03UseState/CheckUseStateRoot";
import CheckCondiRenders from "./components/04ConditionalRenders/CheckCondiRenders";
import CheckPropParent from "./components/05Properties/CheckPropParent";
import X01ParentShop from "./components/06ContextAPI/X01ParentShop";
import X01Lists from "./components/07ListsAndKeys/X01Lists";
import X1ControlledInTodoApp from "./components/08ControlledInputTodoApp/X1ControlledInTodoApp";
import RoutingRoot from "./components/09Routing/RoutingRoot";
import CurdRoot from "./components/10Curd/CurdRoot";
import ReducerRoot from "./components/11Reducer/ReducerRoot";

import Workshop00 from "./components/Workshop00";
// ...................................................................
// Class Components
//....................................................................
import X0ClassProps from "./exploreClass/00classProps/X0ClassProps";
// ...................................................................
// Project Components
//....................................................................
import State from "./projectComponents/workshop/useStateProject/State";
// import TNClassRoot from "/projectComponents/workshop/TNClassProject1/TNClassRoot";

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

      {/* <X1ControlledInTodoApp /> */}

      {/* Routing : React use React-Router DOM for routing, which make the UI and URL in sync it uses HTML Browser HISTORY API */}
      {/* Main Components in React-routers are 
          [1] BrowserRouter >> Wrap whole Application in it
          [2] Routes >> It checks for duplicates and use the First Match
          [3] Route >> contains path and element which are mapped
          [4] Link >> Which put in Navbar act as Anchor but saves State
          [5] Nested Route >> Route inside Route path is concatenated with the parent
          [6] Outlet >> Place Holder where the nested route component renders in parent
          [7] * >> Wildcard for handling un-mentioned routes
          [8] index >> instead of path
          [9] useParams >> hook to get parameter from url as OBJECT
          [10] useNavigate >> hook to navigate programmatically 
      */}

      {/* <RoutingRoot /> */}

      {/* Objective: Doing CURD ops with JSON-SERVER
          Create HOME PAGE with Product Summary
          Create PRODUCT PAGE
          Create Create, Update PRODUCT
          Add Delete Product feature
      */}
      {/* Things Covered in CURD
      
      // PRODUCT PAGE
      [1] Axios :: get data from local json-server
      [2] custom Hooks to get data from any URL
      [3] generating summary via external function
      [4] passing props to OUTLET achieved via useOutletContext
      [5] useNavigate : programmatic Navigation
      [6] useContext for global data supply
      [7] CONTROLLED INPUTS : input element values which are controlled by states is known as controlled inputs
      [8] update,delete,create done in both state and server side
      */}
      {/* <CurdRoot /> */}

      <ReducerRoot />

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
