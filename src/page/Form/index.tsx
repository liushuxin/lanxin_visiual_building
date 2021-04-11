import { useState, useCallback, useRef, useEffect } from "react";
import { reject } from "lodash-es";
import SideBar from "./SideBar";
import { Button, message, Modal } from "antd";
import "./index.less";

import GridLayout from "./GridLayout";

interface LayoutType {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
}

export default function FormComponet(props: any) {
  const [layout, setLayout] = useState<LayoutType[]>([]);
  const [info, setInfo] = useState<any>({});
  const [droppingItem, setDropingItem] = useState<any>({
    i: "初始化",
    w: 1,
    h: 1,
  });
  const [visible, setVisible] = useState(false);
  const layoutRef = useRef();
  const onLayoutChange = useCallback(
    (layouts) => {
      layoutRef.current = layouts;
    },
    [layoutRef]
  );
  const onDrop = (lay: any, layoutItem: any, _event: any) => {
    layout.push(layoutItem);
    info[droppingItem.i] = droppingItem;
    setInfo({ ...info });
    setLayout([...layout]);
  };
  const saveLayout = () => {
    localStorage.setItem(
      "lanxinLayout",
      JSON.stringify(layoutRef.current) || ""
    );
    localStorage.setItem("lanxinInfo", JSON.stringify(info));
    message.success("保存成功");
  };
  useEffect(() => {
    setTimeout(() => {
      const initLayout = localStorage.getItem("lanxinLayout");
      const initInfo = localStorage.getItem("lanxinInfo");
      setInfo(initInfo ? JSON.parse(initInfo) : {});
      setLayout(initLayout ? JSON.parse(initLayout) : []);
    }, 100);
  }, []);

  // 删除某一元素
  const onRemoveItem: any = (item: any) => {
    setLayout(reject(layout, { i: item.i }));
  };

  // 预览
  const onPreview = () => {
    setVisible(true);
  };

  return (
    <div className="form-class">
      <SideBar setDropingItem={setDropingItem} />
      <div className="form_content">
        <div className="header">
          <Button onClick={onPreview}>预览</Button>
          <Button type="primary" onClick={saveLayout}>
            保存
          </Button>
        </div>
        <GridLayout
          preview={false}
          layout={layout}
          info={info}
          droppingItem={droppingItem}
          onRemoveItem={onRemoveItem}
          onDrop={onDrop}
          onLayoutChange={onLayoutChange}
        />
      </div>
      <Modal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        width="800px"
        destroyOnClose
        bodyStyle={{ height: "calc(100vh - 200px)", overflow: "auto" }}
        footer={null}
      >
        <GridLayout
          preview={true}
          newLayout={layoutRef.current}
          layout={layout}
          info={info}
          droppingItem={droppingItem}
          onRemoveItem={onRemoveItem}
          onDrop={onDrop}
          onLayoutChange={onLayoutChange}
        />
      </Modal>
    </div>
  );
}
