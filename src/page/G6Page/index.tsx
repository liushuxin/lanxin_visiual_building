import { useEffect, useRef } from "react";
import { IG6GraphEvent, INode } from "@antv/g6-core";
import G6 from "@antv/g6";
import "./index.css";

export default function G6Page(props: any) {
  const pageRef = useRef<any>();
  const graph = useRef<any>(null);

  useEffect(() => {
    const data = {
      nodes: [
        {
          id: "node1",
          label: "节点1",
          x: 50,
          y: 150,
        },
        {
          id: "node2",
          label: "Circle2",
          x: 400,
          y: 150,
        },
      ],
      edges: [
        {
          source: "node1",
          target: "node2",
        },
      ],
    };
    const minimap = new G6.Minimap({
      size: [100, 100],
      className: "minimap",
      type: "delegate",
    });
    // 实例化 grid 插件
    const grid = new G6.Grid();
    if (!graph.current) {
      graph.current = new G6.Graph({
        plugins: [minimap, grid], // 将 minimap 实例配置到图上
        container: pageRef.current,
        modes: {
          default: [
            // ...
            {
              type: "tooltip", // 提示框
              formatText(model) {
                // 提示框文本内容
                const text =
                  "label: " + model.label + "<br/> class: " + model.class;
                return text;
              },
            },
            {
              type: "edge-tooltip", // 边提示框
              formatText(model) {
                // 边提示框文本内容
                const text =
                  "source: " +
                  model.source +
                  "<br/> target: " +
                  model.target +
                  "<br/> weight: " +
                  model.weight;
                return text;
              },
            },
          ],
        },
        width: 500,
        height: 500,
        defaultNode: {
          size: [100, 50],
          type: "rect",
          color: "#5B8FF9",
          style: {
            fill: "#9EC9FF",
            lineWidth: 3,
          },
          linkPoints: {
            top: true,
            bottom: true,
            left: true,
            right: true,
            fill: "#fff",
            size: 5,
          },
          labelCfg: {
            style: {
              fill: "#fff",
              fontSize: 20,
            },
          },
        },
        defaultEdge: {
          style: {
            stroke: "red",
            lineWidth: 5,
            endArrow: {
              path: G6.Arrow.triangle(10, 20, 10),
              d: 10,
            },
            startArrow: false,
          },
        },
        nodeStateStyles: {
          // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
          hover: {
            fill: "lightsteelblue",
          },
          // 鼠标点击节点，即 click 状态为 true 时的样式
          click: {
            stroke: "#000",
            lineWidth: 3,
          },
        },
      });
    }

    graph.current.data(data);
    graph.current.render();
    graph.current.on("node:mouseenter", (e: IG6GraphEvent) => {
      const nodeItem = e.item as INode; // 获取鼠标进入的节点元素对象
      graph.current.setItemState(nodeItem, "hover", true); // 设置当前节点的 hover 状态为 true
    });
    // 鼠标离开节点
    graph.current.on("node:mouseleave", (e: IG6GraphEvent) => {
      const nodeItem = e.item as INode; // 获取鼠标离开的节点元素对象
      graph.current.setItemState(nodeItem, "hover", false); // 设置当前节点的 hover 状态为 false
    });
    // 监听鼠标点击节点
    graph.current.on("node:click", (e: IG6GraphEvent) => {
      // 先将所有当前有 click 状态的节点的 click 状态置为 false
      const clickNodes = graph.current.findAllByState("node", "click");
      clickNodes.forEach((cn: INode) => {
        graph.current.setItemState(cn, "click", false);
      });
      const nodeItem = e.item as INode;
      // 设置目标节点的 click 状态 为 true
      graph.current.setItemState(nodeItem, "click", true);
    });
    // 监听鼠标点击节点
    graph.current.on("edge:click", (e: IG6GraphEvent) => {
      // 先将所有当前有 click 状态的边的 click 状态置为 false
      const clickEdges = graph.current.findAllByState("edge", "click");
      clickEdges.forEach((ce: IG6GraphEvent) => {
        graph.current.setItemState(ce, "click", false);
      });
      const edgeItem = e.item;
      // 设置目标边的 click 状态 为 true
      graph.current.setItemState(edgeItem as INode, "click", true);
    });
  }, []);

  return (
    <div>
      <h3>G6Page </h3>

      <div style={{ background: "white" }} ref={pageRef}></div>
    </div>
  );
}
