import { Button, Checkbox, Form, Input } from 'antd';

function SurveyForm() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const { TextArea } = Input;

      return (
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="회신받을 이메일"
            name="회신받을 이메일"
            rules={[
              {
                required: true,
                message: '이메일을 입력하세요',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="제목"
            name="제목"
            rules={[
              {
                required: true,
                message: '제목을 입력하세요',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          
          <Form.Item label="내용">
          <TextArea rows={10} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>본인입니다</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
             제출
            </Button>
          </Form.Item>
        </Form>
      );
}

export default SurveyForm;