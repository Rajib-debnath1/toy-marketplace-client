import React from 'react';

const ExtraHero = () => {
    return (
        <div className='my-4'>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                   
                    <div>
                        <h1 className="text-5xl font-bold">Best Funny Toys </h1>
                        <p className="py-6">We are providing the funny toys and baby toys . You can choice a best toys for your cute baby . Just explore our toys gallery</p>
                        <button className="btn btn-primary">Explore</button>
                    </div>
                    <img src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=826&t=st=1684687870~exp=1684688470~hmac=4fe663a086fc2b93c2a9dde14438bb1c00b73777152b1086f2eff6c16f6ec129" className=" rounded-lg shadow-2xl" />
                </div>
            </div>

        </div>
    );
};

export default ExtraHero;