//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.scss';
import './SCSS/Base/_reset.scss';
import {Col, Row} from 'antd';
import {Card} from 'antd' ;

import Tab from './Component/Tab';
import Step  from './Component/Step';
import Form from './Component/Form';
import Upload from './Component/Upload';





function App() {
  return (
    
  <Row  >
    
    
      <Col  md={24} lg={32}>
    <div className='h1 mb-4'>Welcome!</div>
      </Col>
 
 
    <Row className='w-100' gutter={12 }>
    <Col className=' gutter-row' xs={24} sm={24} md={12}>
     <Card>
       <Tab/>
      
      </Card>
    </Col>
    <Col className=' gutter-row'  xs={24} sm={24} md={12} >
    <Card>
      <div className='secondry-paragaph font-500'>Onboard new user</div>
      <div >
          <Step></Step>
      </div>
      <div>
        <Form></Form>
      </div>
     </Card>
     <Card className='mt-4'>
     <div className='secondry-paragaph font-500 mb-4'>Upload cover image</div>
      <Upload ></Upload>
     </Card>
    </Col>
    </Row>

   
  </Row>
  
  );
}

export default App;
