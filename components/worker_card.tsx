import React from 'react';

const WorkerCard = () => {
    return (
        <>
            <div className={'flex flex-row border-double border-gray border-2 p-2 mb-3 w-85'}>
                <div className={'flex w-10 h-10'}>
                    <img src={'/images/profile.webp'} alt={'imagen de perfil'}/>
                </div>
                <div className={'flex justify-between ml-2'}>
                    <p>[Nombre de Trabajador]</p>
                    <p>[Cargo]</p>
                </div>
            </div>
        </>
    );
};

export default WorkerCard;