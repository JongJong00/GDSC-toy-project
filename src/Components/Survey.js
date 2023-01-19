import SurveyForm from './Form';
import { Card } from 'antd';
import styled from 'styled-components';
const Survey = () => {

    return(

        <>
        <LightYellowBack>
            <Wrapping>
            
                <Card bordered={false}>
                  
                
                 <h2>피드백/문의</h2>
                 <SurveyForm />
               
                    
                </Card>
            </Wrapping>
        </LightYellowBack>
        </>

    )
  
    
    
    
}

const LightYellowBack = styled.div`
        background-color : #fcd469;
    `; 

const Wrapping = styled.div`
        position: relative;
        margin-left : 200px;
        margin-right : 200px;
        width : 75%
        display : flex;
        justify-content: center;
        align-items: center;
    `; 


export default Survey;