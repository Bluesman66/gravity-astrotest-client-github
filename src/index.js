import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FullPage from './components/full-page';

ReactDOM.render(<Router>
                   <Route path="/" component={FullPage} />
                </Router>, document.getElementById('root'));