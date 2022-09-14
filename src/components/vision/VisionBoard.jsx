import React from 'react'
import goal from './visionAssets/goal.png'
import vision from './visionAssets/vision.png'
import image from './visionAssets/Rectangle 9.png'

const VisionBoard = () => {
  return (
    <div className="mb-20">
      <section className="mt-20 ">
        <strong className="text-3xl flex justify-center text-center mb-4 font-medium vision">
          About Vision Board
        </strong>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <img
              className="lg:h-[70vh] md:flex lg:flex hidden mx-auto"
              src={image}
              alt=""
            />
          </div>
          <div>
            <p className="flow-root ...  max-w-lg text-gray-600 mx-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              eius optio! Placeat nesciunt eos excepturi aut consectetur magni,
              hic doloremque modi, repudiandae ad sequi libero ut quam vero a
              distinctio maiores laboriosam iste explicabo ea? Aut tenetur
              incidunt quos voluptatibus autem delectus recusandae laboriosam
              quas harum id laborum assumenda ipsam tempora iure, nulla
              exercitationem alias explicabo aliquid quasi illum a quae
              quibusdam! Dolores adipisci tempora provident vitae, harum
              assumenda velit. Fuga aperiam officia quidem, saepe natus ipsa eum
              laudantium. Quia libero, architecto aperiam, voluptate quasi alias
              ullam sunt tempore, labore magnam cupiditate earum incidunt a
              aspernatur impedit sint illo? Modi aspernatur laboriosam
              accusantium vero voluptatibus, aliquid quas fugit? Autem odit
              asperiores atque beatae. Accusamus similique nam pariatur laborum
              totam nobis quae blanditiis reiciendis, corrupti provident
              voluptates! Culpa eos maxime placeat, quas beatae eaque nihil
              reprehenderit vel illum tempora dolor distinctio sunt, error ea
              doloremque. Assumenda iusto neque repellendus impedit fuga.
            </p>
          </div>
        </div>
      </section>
      {/* SECOND PART */}
      <section className="mt-20">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
          <div className=" text-center mx-auto">
            <img src={vision} alt="" className="mx-auto v" />
            <strong className="g font-bold">Our Vision</strong>
            <p className="max-w-lg mx-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              similique expedita nostrum vitae commodi laudantium animi sapiente
              rerum? Odio nihil explicabo, a dolorum cupiditate obcaecati
              reiciendis expedita, eveniet corporis quisquam qui aperiam! In eum
              vitae vero quasi, minima delectus similique facere! Iusto pariatur
              eum dolorum earum, ipsum laboriosam! Hic, adipisci? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ad corrupti modi,
              impedit alias placeat error perferendis nobis amet.
            </p>
          </div>
          <div className="text-center mx-auto mb-7">
            <img src={goal} alt="" className="mx-auto v" />
            <strong className="g font-bold">Our Mission</strong>
            <p className="max-w-lg mx-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              accusamus laboriosam pariatur ipsa sapiente enim beatae facere
              dolorum asperiores voluptatem? Dolor illo ut earum veritatis nihil
              dicta magni odit dolorum, quasi sit nesciunt tempora excepturi,
              repellendus dolores. Quos id, quaerat aperiam error ratione
              nostrum, eveniet pariatur maxime autem laboriosam iste! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur
              culpa totam sit sed laborum quos soluta qui!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisionBoard;