import React from 'react';
import Teammate, { ITeammate } from './components/Teammate';
import employee from '@/assets/employee.png';

const OurTeam = () => {
	const teammates: ITeammate[] = [
		{
			name: 'Omar Aref',
			image: employee,
			position: 'Fullstack Developer',
		},
		{
			name: 'Omar Aref',
			image: employee,
			position: 'Fullstack Developer',
		},
		{
			name: 'Omar Aref',
			image: employee,
			position: 'Fullstack Developer',
		},
	];
	return (
		<div className='bg-gray-100 flex flex-col items-center justify-center gap-13 aspect-[28/17]'>
			<div className='flex flex-col items-center justify-center gap-5 max-w-[46rem]'>
				<h2 className='text-5xl font-bold text-primary'>Our Team</h2>
				<p className='text-gray-500 font-medium text-lg text-center'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s
				</p>
			</div>
			<div className='flex items-center justify-center gap-8 py-6'>
				{teammates.map((teammate, index) => (
					<Teammate key={index} teammate={teammate} />
				))}
			</div>
		</div>
	);
};

export default OurTeam;
