import realicon from '../assets/icon1.svg';
import profile from '../assets/profile.svg';
import star from '../assets/star.svg';

function RealReaders() {
	return (
		<section>
			<div className='bg-[#262626] text-white py-10'>
				<div className='custom-container md:flex items-center justify-between'>
					<div className='mb-[30px]'>
						<button className='sm:block bg-[#333] py-[6px] px-[10px] mb-[10px] font-medium text-xl leading-normal text-white'>
							What Our Readers Say
						</button>
						<h2 className='text-[28px] font-medium'>Real Words from Real Readers</h2>
					</div>
					<button className='bg-[#141414] flex items-center justify-center py-[14px]  border border-[#262626] border-solid rounded-lg text-[#98989a] w-full md:w-[195px] '>
						View All Testimonials <img className='ml-1 w-5 h-5' src={realicon} alt='realicon' />{' '}
					</button>
				</div>
			</div>
			<div className='bg-black text-white'>
				<div className='custom-container'>
					<ul className='sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-10'>
						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='flex mb-12 2xl:mb-14 items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profile}
									alt='profile'
									width={60}
									height={60}
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='bg-[#1a1a1a] relative p-5 pt-8 2xl:p-8 2xl:pt-12 rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px]'>
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='flex mb-12 2xl:mb-14 items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profile}
									alt='profile'
									width={60}
									height={60}
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='bg-[#1a1a1a] relative p-5 pt-8 2xl:p-8 2xl:pt-12 rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px]'>
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='flex mb-12 2xl:mb-14 items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profile}
									alt='profile'
									width={60}
									height={60}
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='bg-[#1a1a1a] relative p-5 pt-8 2xl:p-8 2xl:pt-12 rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px]'>
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='flex mb-12 2xl:mb-14 items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profile}
									alt='profile'
									width={60}
									height={60}
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='bg-[#1a1a1a] relative p-5 pt-8 2xl:p-8 2xl:pt-12 rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px]'>
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='flex mb-12 2xl:mb-14 items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profile}
									alt='profile'
									width={60}
									height={60}
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='bg-[#1a1a1a] relative p-5 pt-8 2xl:p-8 2xl:pt-12 rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px]'>
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='flex mb-12 2xl:mb-14 items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profile}
									alt='profile'
									width={60}
									height={60}
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='bg-[#1a1a1a] relative p-5 pt-8 2xl:p-8 2xl:pt-12 rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px]'>
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
									<img src={star} alt='star' width={24} height={24} />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default RealReaders;
