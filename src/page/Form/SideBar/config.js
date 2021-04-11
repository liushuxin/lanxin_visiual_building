const componentdConfig = [
  {
    name: "基础",
    children: [
      {
        name: "文本组件",
        type: "text",
        w: 20,
        h: 10,
      },
      {
        name: "空白组件",
        type: "empty",
        w: 20,
        h: 10,
      },
      {
        name: "按钮组件",
        type: "button",
        w: 20,
        h: 10,
      },
    ],
  },
  {
    name: "表单",
    children: [
      {
        name: "输入框",
        type: "input",
        w: 40,
        h: 20,
      },
      {
        name: "多选框组",
        type: "checkbox",
        w: 40,
        h: 20,
      },
      {
        name: "Select筛选器",
        type: "select",
        w: 40,
        h: 20,
      },
    ],
  },
];
export default componentdConfig;
