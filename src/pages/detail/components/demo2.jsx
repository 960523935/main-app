import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

const Demo = ({ form }) => {
  const { getFieldDecorator, validateFields, setFieldsValue } = form;
  useEffect(()=>{
    setFieldsValue({title: 'aaaaaa'})
  },[])
  const submit = () => {
    validateFields((err, values) => {
      console.log(err, values);
    });
  };
  return (
    <>
      <Form>
        <Form.Item label="标题">
          {getFieldDecorator("title", {
            rules: [{ required: true }],
          })(<Input placeholder="标题" />)}
        </Form.Item>
      </Form>
      <Button onClick={submit}>提交</Button>
    </>
  );
};

export default Form.create()(Demo);
