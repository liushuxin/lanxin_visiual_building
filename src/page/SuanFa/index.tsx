import { useEffect, useState } from "react";

export default function User(props: any) {
  const [array] = useState([56, 22222, 78, 90, 2, 344, 555, 23, 33, 44, 33]);
  useEffect(() => {
    async function bubbling(array: Array<number>) {
      const len = array.length;
      for (let i = 0; i < len - 1; i++) {
        // 冒泡循环
        for (let j = 0; j < len - 1 - i; j++) {
          // 每次冒泡比较循环
          if (array[j] > array[j + 1]) {
            // 交换位置
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
        }
        //console.log("每次冒泡后顺序", array);
      }
      return array;
    }
    bubbling(array);
  }, [array]);

  return (
    <div>
      <h1>算法动画</h1>
      <div
        className="wrapper"
        style={{ display: "flex", width: "800px", alignItems: "flex-end" }}
      >
        {array.map((it) => (
          <div
            className="wrapper"
            style={{
              margin: "2px",
              height: `${getHeight(it)}px`,
              width: "20px",
              border: "2px solid red",
              wordWrap: "break-word",
            }}
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

function getHeight(height: number) {
  if (height > 200) {
    const extraHeight = height - 200;

    return 200 + extraHeight / 100;
  }
  return height;
}

// function bubbling(array: Array<number>) {
//   const len = array.length;
//   for (let i = 0; i < len - 1; i++) {
//     // 冒泡循环
//     for (let j = 0; j < len - 1 - i; j++) {
//       // 每次冒泡比较循环
//       if (array[j] > array[j + 1]) {
//         // 交换位置
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//       }
//     }
//     //console.log("每次冒泡后顺序", array);
//   }
//   return array;
// }
