import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';
import Email from '../../assets/email.svg';
import Local from '../../assets/local.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-gray-600 absolute bottom-0 p-10 flex flex-col md:flex-row justify-between items-center h-72 w-full'>
      <div className='mb-4 gap-3 flex flex-col md:mb-0'>
        <h1 className='text-xl font-semibold text-white'>APIs Hub</h1>
        <p className='text-sm text-white'>Criado por Vinícius Soares França</p>
        <p className='text-sm text-gray-400'>APIs Hub &copy; 2024</p>
      </div>
      <ul className='flex flex-col items-start gap-5 md:space-y-0 md:space-x-4'>
        <li className='flex gap-3 items-center'>
          <span className='bg-slate-800 p-2 rounded-full'>
            <Image src={Local} alt="GitHub" width={30} height={30} />
          </span>
          <p className='text-white'>Brasil</p>
        </li>
        <li className='flex gap-3 items-center'>
          <span className='bg-slate-800 p-2 rounded-full'>
            <Image src={Email} alt="Email" width={30} height={30} />
          </span>
          <a href='mailto:viniciusicmsc@gmail.com' className='font-medium text-blue-950 hover:underline'>viniciusicmsc@gmail.com</a>
        </li>
      </ul>
      <div className='flex space-x-4'>
        <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
          <Image src={Linkedin} alt="LinkedIn" width={24} height={24} />
        </a>
        <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
          <Image src={Github} alt="GitHub" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
};
