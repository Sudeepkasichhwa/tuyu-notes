import React from "react";
import Image from "next/image";
import Note from "img/Note.jpg";
import Navbar from "../components/Navbar";

export default function Notes() {
  return (
    
    <div className="flex  w-4/5 gap-8">
      <div className="  w-2/5 p-8">
        <div className="text-3xl font-bold">Notes</div>
        <div className="card bg-[#fbfbfb]">
          <h3 className="text-gray-700">Grocery List/ Stores</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            deserunt eligendi reprehenderit consequuntur illum nam impedit
            inventore. Odio magni ea officiis accusantium
          </p>
          <p className="text-gray-400">1 min</p>
        </div>
        <div className="card bg-[#fbfbfb]">
          <h3 className="text-gray-700">Books to read 🌶️</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            deserunt eligendi reprehenderit consequuntur illum nam impedit
            inventore. Odio magni ea officiis accusantium
          </p>
          <p className="text-gray-400">5 min</p>
        </div>
        <div className="card bg-[#fcb660]">
          <h3 className="text-white">Write down your ideas 💡 </h3>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            deserunt eligendi reprehenderit consequuntur illum nam impedit
            inventore. Odio magni ea officiis accusantium
          </p>
          <p className="text-white">5 day</p>
        </div>
        <div className="card bg-[#fbfbfb]">
          <h3 className="text-gray-700">Curried Carrot Soup🌶️</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            deserunt eligendi reprehenderit consequuntur illum nam impedit
            inventore. Odio magni ea officiis accusantium
          </p>
          <p className="text-gray-400">5 min</p>
        </div>
      </div>

      <div className=" w-3/5 p-12 ">
        <div className=" ">
          <Image src={Note} width={400} />
        </div>
        <>
          <h1 className="font-bold text-2xl mt-12 py-2">
            Write Down Your Ideas 💡
          </h1>
          <p className="text-[#fcb660] py-2">#ideas #todo's #morning</p>
          <p className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            consequuntur dicta neque nobis iure delectus, voluptatum assumenda
            placeat tempore autem? Ratione itaque atque architecto saepe
            exercitationem aliquid possimus aperiam in?
          </p>
        </>
        <div>
          <h3 className="font-semibold text-lg my-4">Morning</h3>
        </div>
        <div>
          <ul className="list-disc list-inside grid md:grid-cols-2">
            <li className="font-mono ">Setup meeting with Rachel</li>
            <li className="font-mono">Check to-dos</li>
            <li className="font-mono">Apply at Braintree</li>
            <li className="font-mono">Check reservations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
