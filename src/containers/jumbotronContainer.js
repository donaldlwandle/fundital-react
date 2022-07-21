import React from "react";

import {Jumbotron} from "../components";
import JumboData from "../fixtures/jumbo"
import {ReactComponent as OnlineLearning} from '../images/misc/online_learning.svg';
import {ReactComponent as RemoteSkills} from '../images/misc/remote_skills.svg';
import {ReactComponent as WebDevices} from '../images/misc/web_devices.svg';


export default  function JumbotronContainer() {
  return (
    <Jumbotron.Container>

      { JumboData.map((item) => (

        <Jumbotron key = {item.id} direction ={item.direction}>

          <Jumbotron.Pane className="details">

            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subtitle}</Jumbotron.SubTitle>

          </Jumbotron.Pane>


          <Jumbotron.Pane>

            {item.id === 1 &&

              <OnlineLearning/>

            }

            {item.id === 2 &&

              <RemoteSkills/>

            }

            {item.id === 3 &&

              <WebDevices/>

            }

            
            
            
          </Jumbotron.Pane>

          
          
          

        </Jumbotron>

      ))}


    </Jumbotron.Container>
    
  );
}


