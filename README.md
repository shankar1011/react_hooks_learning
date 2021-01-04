Hooks methods:-

1. useState:- for maintaining state

2. useEffect -- for lifecycle

3. useContext

4. useReducer

5. useCallback

6. useMemo

7. useRef

8. useImperativeHandle

9. useLayoutEffect

10. useDebugValue

Fragments:-- let us group a list of children without adding extra nodes to the DOM.

Example:-

return (
<React.Fragment>
<ChildA />
<ChildB />
<ChildC />
</React.Fragment>
);

                            Class Component                     Functional Component

    Initialisation-->       state={activeIndex: 0}              useState(0)

    Reference-->            this.state.activeIndex              activeIndex

    Updates-->              this.setState({activeIndex: 10})    setActiveIndex(10)

Rules of Hooks:-

Hooks are JavaScript functions, but they impose two additional rules:

Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.

Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

There are three phases of an event:-

1. Capturing phase
2. Tatget node
3. Bubbling phase

1st is the capturing phase from windown down to the target element; next is the target phase; and only then comes the bubbling phase, when an event travels up the tree back to the window.

To register an event listener for the capture phase, append Capture to an event name. For example, instead of using "onMouseOver", you use "onMouseOverCapture" to handle the mouseover event in the capture phase.
