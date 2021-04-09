import { Button, Input, Form } from "antd";
import "antd/dist/antd.css";
import { FormEvent, useEffect } from "react";
import { getList } from "./services";
const EXPORT_EXCEL_URL = "http://localhost:8000/exportExcel";
export default function User(props: any) {
  const changeValue = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  // 导出列表
  const exportExcel = () => {
    window.open(EXPORT_EXCEL_URL);
  };
  useEffect(() => {
    const getData = async () => {
      const data = await getList();
      console.log("data", data);
    };
    getData();
  }, []);
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <Button type="primary" onClick={exportExcel}>
            导出
          </Button>
          <Form name="姓名">
            <Input onChange={changeValue} />
          </Form>

          <span>2222</span>
          <span>333</span>
        </header>
      </div>
    </div>
  );
}
