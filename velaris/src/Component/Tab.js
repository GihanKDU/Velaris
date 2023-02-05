import user1 from '../Assets/user1.png';
import user2 from '../Assets/user2.png';
import user3 from '../Assets/user3.png';
import { Tabs } from 'antd';
import { Pagination } from 'antd';
import { Col, Row } from 'antd';
import { Button } from 'antd';
import { LikeOutlined, StarOutlined  } from '@ant-design/icons';

const TabPane = Tabs.TabPane;


function callback(key) {
  console.log(key);
}



function Tab() {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Conversation" key="1">
        <Row>
          <Col md={2}>
             <img className='user-profile' src={user1} alt="User" />
          </Col>

          <Col md={22} flex="1 0 auto" >
            <div className='primary-paragaph font-700 '>Alma Andrews</div>
            <p className='mt-3 primary-paragaph secondry-heading'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            <div className='mt-3 primary-paragaph'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</div>

            <Row className='mt-3' justify="end">
              <Col span={8}>
                <Button className='btn-secondy'>Reply</Button>
              </Col>

              <Col className='antd-flex antd-end antd-align_center' flex={0} span={8} offset={8}>
                <div className='antd-flex antd-align_center mr-4' >
                  
                  <Button className='antd-flex antd-align_center icon-button ' type="primary"  icon={<LikeOutlined />} ><div className='primary-paragaph secondry-heading ml-1'> 62</div></Button>
                
                </div>
                <div className='line-h'></div>
                <div className='antd-flex antd-align_center'>
                <Button className='antd-flex antd-align_center icon-button ' type="primary"  icon={<StarOutlined />} ><div className='primary-paragaph secondry-heading ml-1'> 18</div></Button>
                 
                </div>
               

              </Col>
             
            </Row>
           
          </Col>
          <div className='line-v'></div>
     
        </Row>
        <Row className='mt-4'>
          <Col md={2}>
             <img className='user-profile' src={user2} alt="User" />
          </Col>

          <Col md={22} flex="1 0 auto" >
            <div className='primary-paragaph font-700 '>Nelson Richards</div>
            <p className='mt-3 primary-paragaph secondry-heading'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            <div className='mt-3 primary-paragaph'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</div>

            <Row className='mt-3' justify="end">
              <Col span={8}>
                <Button className='btn-secondy'>Reply</Button>
              </Col>

              <Col className='antd-flex antd-end antd-align_center' flex={0} span={8} offset={8}>
                <div className='antd-flex antd-align_center mr-4' >
                  
                  <Button className='antd-flex antd-align_center icon-button ' type="primary"  icon={<LikeOutlined />} ><div className='primary-paragaph secondry-heading ml-1'> 36</div></Button>
                
                </div>
                <div className='line-h'></div>
                <div className='antd-flex antd-align_center'>
                <Button className='antd-flex antd-align_center icon-button ' type="primary"  icon={<StarOutlined />} ><div className='primary-paragaph secondry-heading ml-1'> 11</div></Button>
                 
                </div>
               

              </Col>
             
            </Row>
           
          </Col>
          <div className='line-v'></div>
     
        </Row>
        <Row className='mt-4'>
          <Col md={2}>
             <img className='user-profile' src={user3} alt="User" />
          </Col>

          <Col md={22} flex="1 0 auto" >
            <div className='primary-paragaph font-700 '>Stella Reid</div>
            <p className='mt-3 primary-paragaph secondry-heading'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            <div className='mt-3 primary-paragaph'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</div>

            
           
          </Col>
         
     
        </Row>
        <Pagination className='mt-4' defaultCurrent={1} total={50} /> 
        
        


      </TabPane>
      <TabPane tab="Files" key="2"> </TabPane>
      <TabPane tab="Notes" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>

  );
}

export default Tab;