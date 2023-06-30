import { Button, Form, Input, Modal } from "antd";
import { setAccessToken } from "../authentication";
import { login } from "../axiosConfig";
import { useState } from "react";
const Logins = ({ isModalOpen, handleOk, handleCancel, callback }) => {
    const [name, setName] = useState('')
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const data = await login(values.username, values.password);
    if (!data.data.token) {
      handleCancel();
      callback(data.data);
      form.resetFields();
    } else {
      setAccessToken(data.data.token);
      handleCancel();
      callback("Dang nhap thanh cong", data.data.users);
      form.resetFields();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        title="Login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={true}
        footer={null}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          ></Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Dang nhap
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Logins;
