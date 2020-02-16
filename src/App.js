import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount( count + 1 );
  const decrement = () => setCount( count - 1 );

  const increment2 = () => setCount( previousCount => previousCount + 1);
  const decrement2 = () => setCount( previousCount => previousCount - 1);

  const reset = () => setCount(0);
  const double2 = () => setCount( previousCount => previousCount * 2);
  const fizzbuzz = () => setCount( previousCount => {
    return (previousCount % 3 === 0) ? previousCount / 3 : previousCount;
  });

  return (
    <React.Fragment>
      <p>you click {count} times</p>
      <button onClick={ increment }>
        +1.
      </button>
      <button onClick={ decrement }>
        -1.
      </button>

      <div>
        <button onClick={ increment2 }>
          +1.
        </button>
        <button onClick={ decrement2 }>
          -1.
        </button>
      </div>

      <div>
        <button onClick={ reset }>reset</button>
        <button onClick={ double2 }>x2</button>
        <button onClick={ fizzbuzz }>3倍数の時だけ、３で割る</button>
      </div>
    </React.Fragment>
  );
}

export default App;
