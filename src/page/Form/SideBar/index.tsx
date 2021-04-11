import React from "react";

import componentdConfig from "./config";

import styles from "./index.module.less";

interface SideBarProps {
  setDropingItem?: any;
}
const SideBar: React.FC<SideBarProps> = ({ setDropingItem }) => {
  const listDOM = componentdConfig.map((item) => {
    return (
      <div key={item.name}>
        <div className={styles.title}>{item.name}</div>
        <div>
          {item.children?.map((components) => {
            return (
              <div
                key={components.name}
                className={styles.component_item}
                draggable
                onDragStart={(e) => {
                  setDropingItem({
                    i: Math.random().toString(),
                    ...components,
                  });

                  e.dataTransfer.setData("text/plain", "");
                }}
              >
                {components.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return <div className={styles.wrap}>{listDOM}</div>;
};
export default SideBar;
