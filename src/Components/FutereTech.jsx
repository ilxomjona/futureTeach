import logo from '../assets/logo.svg';
import icon from '../assets/icon.svg';

function FutereTech() {
	return (
		<section className='py-10 sm:py-11 md:py-12 lg:py-14 xl:py-24 2xl:py-[120px] bg-[#1a1a1a] text-white'>
			<div className='custom-container '>
				<div className='block sm:flex  items-center mb-[100px] '>
					<div className='flex items-center mr-5 sm:mr-6 md:mr-7 lg:mr-9 xl:mr-[60px] 2xl:mr-20'>
						<img
							className='mr-5 sm:mr-0 w-14 h-14 sm:w-full sm:h-full  lg:w-24 lg:h-24 xl:w-32 xl:h-32 2xl:w-[150px] 2xl:h-[150px] '
							src={logo}
							alt='logo'
							width={150}
							height={150}
						/>
						<button className='block sm:hidden bg-[#333] py-1 px-2  font-medium text-sm leading-normal  rounded-[4px]'>
							Learn, Connect, and Innovate
						</button>
					</div>
					<div>
						<button className='hidden sm:block bg-[#333] py-[6px] px-[10px] mb-4 font-medium text-xl leading-normal'>
							Learn, Connect, and Innovate
						</button>
						<h2 className=' leading-normal font-medium mb-0 text-[28px] sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-[58px] 2xl:mb-[30px] '>
							Be Part of the Future Tech Revolution
						</h2>
						<p className='text-[#7e7e81] leading-normal font-normal text-sm  sm:text-base xl:text-lg '>
							Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech
							enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
						</p>
					</div>
				</div>
				<ul className='bg-[#141414;]  border border-[#262626 border-solid flex flex-col md:flex-row justify-between p-[10px] sm:p-3 lg:p-4 xl:p-5'>
					<li className='custom-li bg-[#262626] max-w-[98%] xl:max-w-[505px] w-full border border-[#e11818 border-solid] p-6 sm:p-7 md:p-8 xl:p-9 2xl:p-10'>
						<div className='flex items-center justify-between mb-[10px] sm:mb-3 md:mb-4 xl:mb-5'>
							<h2 className='font-semibold text-base md:text-lg lg:text-xl xl:text-[32px] leading-normal'>Resource Access</h2>
							<div className='w-10 h-10 lg:w-12 lg:h-12 xl:w-[52px] xl:h-[52px] rounded-[50%] bg-[#FFD11A;] flex items-center justify-center'>
								<img src={icon} alt='icon' width={24} height={24} />
							</div>
						</div>
						<p className='text-[#98989A;] leading-normal font-normal text-sm  sm:text-base xl:text-lg'>
							Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
						</p>
					</li>
					<li className='custom-li bg-[#262626] max-w-[98%] xl:max-w-[505px] w-full border border-[#e11818 border-solid] p-6 sm:p-7 md:p-8 xl:p-9 2xl:p-10'>
						<div className='flex items-center justify-between mb-[10px] sm:mb-3 md:mb-4 xl:mb-5'>
							<h2 className='font-semibold text-base md:text-lg lg:text-xl xl:text-[32px] leading-normal'>Resource Access</h2>
							<div className='w-10 h-10 lg:w-12 lg:h-12 xl:w-[52px] xl:h-[52px] rounded-[50%] bg-[#FFD11A;] flex items-center justify-center'>
								<img src={icon} alt='icon' width={24} height={24} />
							</div>
						</div>
						<p className='text-[#98989A;] leading-normal font-normal text-sm  sm:text-base xl:text-lg'>
							Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
						</p>
					</li>
					<li className='custom-li bg-[#262626] max-w-[98%] xl:max-w-[505px] w-full border border-[#e11818 border-solid] p-6 sm:p-7 md:p-8 xl:p-9 2xl:p-10'>
						<div className='flex items-center justify-between mb-[10px] sm:mb-3 md:mb-4 xl:mb-5'>
							<h2 className='font-semibold text-base md:text-lg lg:text-xl xl:text-[32px] leading-normal'>Resource Access</h2>
							<div className='w-10 h-10 lg:w-12 lg:h-12 xl:w-[52px] xl:h-[52px] rounded-[50%] bg-[#FFD11A;] flex items-center justify-center'>
								<img className='object-contain' src={icon} alt='icon' width={24} height={24} />
							</div>
						</div>
						<p className='text-[#98989A;] leading-normal font-normal text-sm  sm:text-base xl:text-lg'>
							Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default FutereTech;
