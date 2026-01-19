import A99CheckRoot from "./components/00Components/A99CheckRoot";
import CheckStyle from "./components/01StylingComponents/CheckStyle";
import CheckEventsRoot from "./components/02Events/CheckEventsRoot";
import CheckUseStateRoot from "./components/03UseState/checkUseStateRoot";
import CheckCondiRenders from "./components/04ConditionalRenders/CheckCondiRenders";
import Workshop00 from "./components/Workshop00";

function App() {
  return (
    <>
      {/* 00 Components */}
      {/* Class[stateful], functional[stateless] */}
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
      <CheckCondiRenders />

      {/* Tryouts... */}
      {/* <Workshop00 /> */}
    </>
  );
}

export default App;
