/*react flow:
1. redux applikaation state
2. sarja reducereita muodostaa staten
3. statea muokataan action creatoreilla
4. action creatorit (funktioita) palauttavat actionin
5. valuu middlewareen
6. ja lopulta reducereihin
7. kun uusi staten tila syntyy
8. se valuu containereihin (alykkäitä komponentteja) jotka uudelleen renderöivät itsensä*/


/* react component boilerplate

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}

tai:

import React, {Component} from 'react';

class PostsIndex extends Component {
  render() {
    return (
      <div>
       Posts Index
      </div>
    );
  }
}

export default PostsIndex;
*/
//****************ROUTE*****************************
//4.2.2
/*
BrowserRouter on se joka on yhteydessä historiakirjastoon selaimessa
import { BrowserRouter, } from 'react-router-dom';
*/
/* Route päättää mitä componeentteja milloinkin näytetään
import { BrowserRouter, Route} from 'react-router-dom';
*/

/* eli esimerkiksi path tulee se että mikä urli ja component on sitten että mikä vastaava komponentti näytetään (Hello).
// oikeastaan vain päätetään näytetäänkö / piiloitetaanko joku komponentti
<BrowserRouter>
  <div>
  <Route path="/hello" component={Hello}/>
  <Route />
  </div>
</BrowserRouter>

***************ROUTE************************************
**************AXIOS**********************************
1. pitää installoida AXIOS
2. pitää installoida redux-promise
3. index.js pitää ottaa middleware käyttöön => import redux-promise const createStoreWithMiddleware = applyMiddleware()(createStore); => const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
4. actioneissa sitten axios importtina käyttöön
5. const request = axios.get(URLI)

************AXIOS****************************************
***********REDUCERS**************************************
1. reducer saa syötteenä edellisen staten ja actionin

//defaulttina state on olio
export default function(state = {}, action)
case FETCH_POSTS:
		return _.mapKeys(action.payload.data, 'id');
    => eli muutetaan array objektiksi jolla id avaimena [action.payload.data] on mitä tulee palvelimelta.
***********REDUCERS**************************************
**********
*****************COMPONENT***********************
1. otetaan käyttöön action creator. eli importataan connect ja actioni
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

//aina kun käytetään aplikaation statea pitää kutsua map state to props
**********COMPONENT***********************
