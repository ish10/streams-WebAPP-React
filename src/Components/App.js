import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import StreamCreate from './StreamCreate';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import Header from  './Header'
const App =()=>{
return(<div className="ui container">
     <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={StreamList} />
          <Route path="/new" exact component={StreamCreate} />
          <Route path="/edit" exact component={StreamEdit} />
          <Route path="/delete" exact component={StreamDelete} />
          <Route path="/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>




</div>
    
    
    
    
    );
};
export default App;