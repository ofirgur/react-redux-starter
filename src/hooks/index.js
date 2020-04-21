const MyReact = (function() {
    let _val; // hold our state in module scope

    return {
      render(Component) {
        const Comp = Component(); 

        Comp.render();

        return Comp;
      },
      useState(initialValue) {
        _val = _val || initialValue; // assign anew every run

        function setState(newVal) {
          _val = newVal;
        }

        return [_val, setState];
      }
    };
})();

export default MyReact;

export const Counter = () => {
    const [count, setCount] = MyReact.useState(0);

    return {
      click: () => setCount(count + 1),
      render: () => console.log('render:', { count })
    };
};

/**
 
import MyReact, { Counter } from 'hooks';

let App
App = MyReact.render(Counter) // render: { count: 0 }
App.click()
App = MyReact.render(Counter) // render: { count: 1 } 

// see https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/
*/