import { Card, Col, Row } from 'antd';
import { CarryOutOutlined, CommentOutlined } from '@ant-design/icons';
import { Badge, Divider, Space } from 'antd';
import { Tag } from 'antd';
import styled from 'styled-components';

const Detail = () => {
    const colors = [
        '과목년도', //year
        '학기', //semester
        '수강학년', // grade 
        '학과(학부) ', //major
        '학점', //credit
        '이론인정학점', // lecture_credit
        '실습인정학점',// prac_credit
        '수업시간', // school_time
        '실제수업시간', // real_time
        '강의건물', // building
        '강의실', // room
        '총원', // total
        '수강신청인원', // sugang
        '수강꾸러미 담은인원', // sugangpack
        '강의평가 아이디', // review_id(pk)
        '과목코드 ', // lecture_id ex) 20221DOAS0305002
        '수강인원', // sugang_number
        '학과평균', // univ_mean(학과마다 다름)
        '표준편차로 계산한 강의평점' // favor %(정규화)

    ];

    return (
        <>
            <YellowBack>
                <Wrap className="site-card-border-less-wrapper">
                    <Card bordered={false}>
                        <Header>
                            <h1>과목명</h1> 
                            <h5>과목코드</h5>
                        </Header>

                      <DividerWrap>
                        <Divider orientation="left">
                            {' '}
                            <CarryOutOutlined /> 인기도
                        </Divider>
                      </DividerWrap>

                        <Popularity>
                            <div className="site-card-wrapper">
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card
                                            title="수강꾸러미 담은인원 / 수강신청인원" //Sugangpack/sugang
                                            bordered={false}
                                        >
                                            150%
                                        </Card>
                                    </Col>

                                    <Col span={8}>
                                        <Card
                                            title="수강꾸러미 담은인원 / 총원" //Sugangpack/total
                                            bordered={false}
                                        >
                                            190%
                                        </Card>
                                    </Col>

                                    <Col span={8}>
                                        <Card title="상위 퍼센트"  // 1-favor
                                        bordered={false}> 
                                            30%
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Popularity>

                        <Divider orientation="left">
                            {' '}
                            <CarryOutOutlined /> 기본정보
                        </Divider>
                        <HashTag>
                            <Tag color="magenta">교수님</Tag>
                            <Tag color="red">학부(대학)</Tag>
                            <Tag color="volcano">교과구분</Tag> 
                            <Tag color="orange">수업방식</Tag>   
                        {/* (위에꺼부터)professor college type information */}
                            
                        </HashTag>

                        <Divider orientation="left">
                            {' '}
                            <CarryOutOutlined /> 세부 수업 관련 정보
                        </Divider>

                        <Contents>
                            <Space direction="vertical" level={5}>
                                {colors.map((colors) => (
                                    <Badge
                                        key={colors}
                                        color={colors}
                                        text={colors}
                                        status="processing"
                                      
                                    />
                                ))}
                            </Space>
                        </Contents>

                        <Divider orientation="left">
                            <CommentOutlined /> 리뷰
                        </Divider>

          <Popularity>
                <div className="site-card-wrapper">
                  <Row gutter={16}>

                    <Col span={8}>
                      <Card title="강의평가인원" // review_number
                      bordered={false}>
                        36
                      </Card>
                    </Col>

                    <Col span={8}>
                      <Card title="강의평가평균" // review_mean
                      bordered={false}>
                        4.71
                      </Card>
                    </Col>

                    <Col span={8}>
                      <Card title="표준편차" // standard_deviation
                       bordered={false}>
                        0.27
                      </Card>
                    </Col>

                  </Row>
                </div>
          </Popularity>
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
                        <footer></footer>
                    </Card>
                </Wrap>
            </YellowBack>
        </>
    );
};

const YellowBack = styled.div``;

const Wrap = styled.div`
        position: relative;
        margin: 20px;
        width : 75%
        display : flex;
        justify-content: center;
        align-items: center;
    `;

const Header = styled.div`
    display: flex;
`;

const Popularity = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`;

const HashTag = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 100px;
`;

const Contents = styled.div`
    margin-top: 30px;
    font-weight : 500;
    margin-bottom: 30px;
    line-height : 2.8em;
`;

const DividerWrap = styled.div `
   font-size : 15px;
   font weight : 600;
`;

export default Detail;