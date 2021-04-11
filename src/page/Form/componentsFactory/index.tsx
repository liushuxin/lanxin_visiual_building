import React from "react";
import { Input, Checkbox, Select, Button, Form } from "antd";
import styles from "./index.module.less";
const { Option } = Select;

const componentsFactory = () => {
  const config: any = {
    text: () => {
      return <div className={styles.text_wrap}>文本组件</div>;
    },
    button: (props: any) => {
      return (
        <Button {...props} type="primary">
          {props.name || "按钮"}
        </Button>
      );
    },
    empty: () => {
      return <div className={styles.empty}></div>;
    },
    input: (props: any) => {
      return (
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
      );
    },
    checkbox: (props: any) => {
      return (
        <Form.Item label="多选框组" name="multicheck" valuePropName="checked">
          <Checkbox>组一</Checkbox>
          <Checkbox>组二</Checkbox>
          <Checkbox>组三</Checkbox>
        </Form.Item>
      );
    },
    select: (props: any) => {
      return (
        <Form.Item label="筛选器" name="select">
          <Select>
            <Option key="1" value="1">
              选项一
            </Option>
            <Option key="2" value="2">
              选项二
            </Option>
          </Select>
        </Form.Item>
      );
    },
  };
  return config;
};
export default componentsFactory;
