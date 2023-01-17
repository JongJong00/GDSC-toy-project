import { Card, Col, Row } from 'antd';
import { CarryOutOutlined, CommentOutlined } from '@ant-design/icons';
import { Badge, Divider, Space } from 'antd';
import { Tag } from 'antd';
import styled from 'styled-components';
import "../App.css";

const Detail = () => {
    
const colors = [
        'year 과목년도',
        'semester 학기',
        'grade 수강 학년',
        'college 수업 소속 대학 V',
        'major 학과(학부) ',
        'credit 학점',
        'lecture_credit 이론 인정 학점',
        'prac_credit 실습 인정 학점',
        'professor 교수님 성함 ',
        'school_time 학교 시간표 기준 수업시간',
        'real_time 실제 수업 시간',
        'building 강의 건물',
        'room 강의실',
        'total 총원',
        'sugang 수강 신청 한 인원',
        'sugangpack 수강 꾸러미 담은 인원',

]
return (


<>

  <Wrap className="site-card-border-less-wrapper">

    <Card bordered={false} >

      <Header>
        <h1>동역학</h1>
        <h5>CRTR23423</h5>
      </Header>
        <Btn>메인페이지로 돌아가기</Btn>
      

  <Divider orientation="left"> <CarryOutOutlined /> 인기도</Divider>

  <div className="site-card-wrapper">
    <Row gutter={16}>

      <Col span={8}>
        <Card title="Sugangpack/sugang" bordered={false}>
          150%
        </Card>
      </Col>

      <Col span={8}>
        <Card title="Sugangpack/total" bordered={false}>
          190%
        </Card>
      </Col>

      <Col span={8}>
        <Card title="favor" bordered={false}>
          30%
        </Card>
      </Col>

    </Row>
  </div>

  <Divider orientation="left" > <CarryOutOutlined />   기본정보</Divider>
        <HashTag>
      <Tag color="magenta" >교수님</Tag>
      <Tag color="red">학부(대학)</Tag>
      <Tag color="volcano">type</Tag>
      <Tag color="orange">information</Tag>
      {/* <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag> */}
    </HashTag>
    
    <Divider orientation="left"> <CarryOutOutlined />   세부 수업 관련 정보</Divider>
    
    <Space direction="vertical">
      {colors.map((colors) => (
        <Badge key={colors} color={colors} text={colors} />
      ))}
    </Space>

     <Divider orientation="left"><CommentOutlined />   리뷰</Divider>
    <Space direction="vertical">
      <div>review</div>
    </Space>
        {/* <Row style={{padding : 60}}>
        <Col span={12}></Col>
        <Col span={12}>배종현</Col>
        </Row>
        <Row style={{padding : 30}}>
        <Col span={12}>공대 4호관</Col>
        <Col span={12}>303호</Col>
        </Row>
        <Row style={{padding : 30}}>
        <Col span={24}>월 13:00 - 16:00
        월 13:00 - 16:00
        월 13:00 - 16:00
        </Col>
        </Row>
        <Row style={{padding : 30}}>
        <Col span={12}>이론학점 : 3</Col>
        <Col span={12}>실습학점 : 3</Col>
        </Row> */}
        
      </Card>
      </Wrap>
       
      </>
    )}
  
    const Wrap = styled.div`
        position: relative;
        width: 75%; 
        
`;    

const HashTag = styled.div`
  align-items:left;     
`;    

  

const Header = styled.div`
        display : flex 
        
`;    

const Btn = styled.button`
background:#1AAB8A;
color:#fff;
border:none;
position:relative;
height:50px;
font-size:1.6em;
padding:0 2em;
cursor:pointer;
transition:800ms ease all;
outline:none;
border-right-width: 2px;
width: 75%
`; 




export default Detail;


