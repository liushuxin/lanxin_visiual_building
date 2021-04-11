import { CSSProperties } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import componentsFactory from "./componentsFactory";
const ReactGridLayout = WidthProvider(RGL);

const GridLayout = ({
  preview,
  layout,
  info,
  droppingItem,
  onRemoveItem,
  onDrop,
  onLayoutChange,
  newLayout,
}: any) => {
  const generateDOM: any = () => {
    const removeStyle: CSSProperties = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    const layouts = newLayout || layout;
    return layouts.map((l: any, i: number) => {
      const itemInfo = info[l.i] || droppingItem;
      const ItemComponent = componentsFactory()[itemInfo.type];
      let wrapCls = true ? "item-grid-show" : "item-react-grid";
      return (
        <div
          key={l.i}
          className={wrapCls}
          data-grid={{ x: l.x, y: l.y, w: l.w, h: l.h }}
        >
          <ItemComponent key={l.i} {...itemInfo} />
          {preview ? null : (
            <span
              className="remove"
              style={removeStyle}
              onClick={() => onRemoveItem(l)}
            >
              x
            </span>
          )}
        </div>
      );
    });
  };

  return (
    <ReactGridLayout
      droppingItem={droppingItem}
      isDraggable={!preview}
      isResizable={!preview}
      className={preview ? "layout-preview-container" : "layout-container"}
      onLayoutChange={onLayoutChange}
      onDrop={onDrop}
      measureBeforeMount={false}
      rowHeight={5}
      margin={[0, 0]}
      containerPadding={[0, 0]}
      cols={48}
      isDroppable={!preview}
    >
      {generateDOM()}
    </ReactGridLayout>
  );
};

export default GridLayout;
