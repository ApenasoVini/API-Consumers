import Image from 'next/image';
import Link from 'next/link';
import Home from '../../public/home.svg';

export default function Header() {
    return (
        <header className='bg-gray-900 p-4'>
            <Link href='/'>
                <Image alt='' className='w-8 h-8' src={Home} />
            </Link>
        </header>
    );
}
