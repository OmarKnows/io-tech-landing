import { CallCalling, Whatsapp, Sms } from 'iconsax-reactjs';
import Image, { StaticImageData } from 'next/image';

export interface ITeammate {
	name: string;
	image: StaticImageData;
	position: string;
}

interface ITeammateProps {
	teammate: ITeammate;
}
const Teammate = ({ teammate }: ITeammateProps) => {
	return (
		<div className='flex flex-col items-center gap-3'>
			<div className='bg-secondary w-[269px] h-[184px] flex items-center justify-center overflow-hidden'>
				<Image src={teammate?.image} alt={teammate?.name} width={269} height={184} className='object-contain' />
			</div>
			<h3 className='text-2xl font-medium text-primary'>{teammate?.name}</h3>
			<p className='text-sm text-gray-300 font-bold'>{teammate?.position}</p>
			<div className='flex items-center justify-center gap-3'>
				<Whatsapp size='18' color='black' />
				<CallCalling size='18' color='black' />
				<Sms size='18' color='black' />
			</div>
		</div>
	);
};

export default Teammate;
