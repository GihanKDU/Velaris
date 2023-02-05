import { Radio } from 'antd';
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';


const onChange = (e) => {
  console.log(`radio checked:${e.target.value}`);
};
const App = () => (
 <div className='main-form'>
    <div className='antd-flex antd-align_center '>
        
      
    </div>
    <Row gutter={12 }>
          <Col className='antd-flex antd-align_center antd-end' md={3}>
          Role :
          </Col>
          <Col md={21}>
          <div className='ml-2'>
        <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">User</Radio.Button>
      <Radio.Button value="b">Editor</Radio.Button>
      <Radio.Button value="c">Admin</Radio.Button>
      </Radio.Group>
        </div>
          </Col>
    </Row>
    <Row gutter={12 } className='mt-4'>
          <Col className='antd-flex antd-align_center antd-end '  md={3}>
          
          Name :
          </Col>
          <Col md={21}>
          <Input placeholder="Enter Name" />
          </Col>
    </Row>
    <Row gutter={12 } className='mt-4 '>
          <Col className='antd-flex antd-align_center antd-end'  md={3}>
          <div className='primary-paragaph font-400'>Remark :</div>
          </Col>
          <Col md={21}>
          <Input placeholder="Add Remarks" />
          
          </Col>
    </Row>
    <Row gutter={12 } className='mt-4 '>
          <Col className='antd-flex antd-align_center antd-end'  md={3}>
         
          </Col>
          <Col md={21}>
         
          <Button className='btn-primary' type="primary">Add User</Button>
          </Col>
    </Row>
 </div>
);
export default App;