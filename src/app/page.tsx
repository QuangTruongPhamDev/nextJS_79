import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl text-red-700">
      Hello BC79
      <Image
        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
        width={500}
        height={500}
        alt="lat mat 48h"
      />
      <Image
        src={"/images/anh1.jpg"}
        width={500}
        height={500}
        alt="hinh anh 1"
      />
    </div>
  );
}
