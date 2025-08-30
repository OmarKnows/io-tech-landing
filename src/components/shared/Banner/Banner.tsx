import banner from '@/assets/banner.svg';
import Image from 'next/image';

interface IBannerProps {
	withCaroussel?: boolean;
}

export default function Banner({ withCaroussel = false }: IBannerProps) {
	return (
		<div className='relative w-full aspect-[28/17]'>
			<Image src={banner} alt='Banner' fill priority className='object-cover object-center z-0' />
		</div>
	);
}
