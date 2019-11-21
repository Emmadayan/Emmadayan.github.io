import React, {Component} from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Modal from './Components/Modal/Modal';

class App extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
}

  state = {
    show:false,

    menu: [
      {id:'home', name:'HOME'},
      {id:'portfolio', name:'PORTFOLIO'},
      {id:'about', name:'ABOUT'},
      {id:'Contact', name:'CONTACT'}
    ]
  };

  showModal = ()=>{
    this.setState({
      // show:true
      show:!this.state.show
    });
  };


  render(){

    const items = this.state.menu.map(
      (data) =>
        <div className='items col m2 l2'>
          <a>{data.name}</a>
          {/* <p>{data.description}</p> */}
        </div>
      
    );

    return (
      <div className="App">
        <p className="title">Emma Dayan</p>


        {/* <button onClick = {()=>{this.showModal();}}> Open Modal</button> */}

        <div className='row'>
          <div className="col s12 m8 l10 offset-3 linkOne page class">
		        <div className="portfolio">
                <div className="gallery">
                    {/* <a class="carousel-item" href="#one!"><img src="photos/one.jpg"></a>
                    <!-- <div class="centered">PORTRAITS</div> -->
                    <a class="carousel-item" href="#two!"><img src="photos/two.png"></a>
                    <a class="carousel-item" href="#three!"><img src="photos/three.jpg"></a>
                    <a class="carousel-item" href="#four!"><img src="photos/four.jpg"></a> */}
                </div>
		        </div>	
          </div>

          {items}


          <div id="linkTwo" className=" col s12 m8 l10 offset-3 linkTwo page">
		        <div className="about">	
			          {/* <spam class="big-text t2">SERVICES</spam>	 */}
		        </div>		
	        </div>

      </div>

        {/* {items} */}

        <Modal onClose = {this.showModal} show = {this.state.show}>This is dynamic</Modal>


      </div>
    );
  }
}

export default App;
