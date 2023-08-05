import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
            <form action="POST" className='flex flex-col max-w-[700px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font bold inline border-b-4 border-cyan-500 text-cyan-500'>Formulaire de contact</p>
                </div>
                <input className='bg-[#ccd6f6] p2' type="text" placeholder="Nom" name='name' required/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name="email" required/>
                <textarea className='bg-[#ccd6f6] p-2' name="message" row="10" placeholder="Message" required></textarea>
                <button className='bg-[#ccd6f6] border-2 hover:bg-cyan-600 hover:border-cyan-600 px-4 py-3 my-8 mx-auto flex items-center'>Envoyer</button>
            </form>
        </div>
    )
}

export default Contact;