import React from 'react';
import { Steps } from 'antd';
// import "../CSS/styles.css";

const description = 'This is a description.';

const App = () => (
  <Steps
    current={1}
    className='custom-steps'
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);

export default App;