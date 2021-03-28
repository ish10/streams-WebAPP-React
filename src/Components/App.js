import React from 'react';
import { Router,Route,Switch } from 'react-router-dom';
import StreamCreate from './StreamCreate';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import Header from  './Header'
import history from '../history';
const App =()=>{
return(<div className="ui container">
     <Router history={history}>
        <div>
          <Header/>
          <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/Streams/delete?:id" exact component={StreamDelete} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
          </Switch>
        </div>
        </Router >




</div>
    
    
    
    
    );
};
export default App;