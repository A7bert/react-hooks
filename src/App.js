import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
Auth.configure(awsconfig);

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default withAuthenticator(App, {includeGreetings: true});
