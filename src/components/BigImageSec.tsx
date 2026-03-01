

const BigImageSec = () => {
  return (
    <div className="min-h-screen w-full bg-black flex relative items-center justify-center overflow-x-clip">
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center overflow-hidden'>
        {[...Array(50)].map((_, index) => (
          <div key={index}>
            {[...Array(32)].map((_, index) => (
              <div key={index} className={`overflow-hidden border border-gray-900 w-8 h-8`}></div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

    </div>
  )
}

export default BigImageSec