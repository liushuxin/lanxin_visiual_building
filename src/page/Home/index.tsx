import { useState } from "react";
interface FileInfoInter {
  name?: string;
  size?: number;
}
export default function HOME(props: any) {
  const [fileInfo, setFileInfo] = useState<FileInfoInter>({
    name: "",
    size: 0,
  });

  return (
    <div>
      <h3>HOME </h3>
      <input
        onChange={(file: any) => {
          const { name, size } = file.target.files[0];
          setFileInfo({ name, size });
        }}
        value=""
        title=" "
        type="file"
        name="file1"
        id="file"
      />
      <div>
        File Name: {fileInfo.name}
        <br />
        File Size: {fileInfo.size}
      </div>

      <div
        style={{ height: "1000px", backgroundColor: "red", width: "30px" }}
      ></div>
    </div>
  );
}
