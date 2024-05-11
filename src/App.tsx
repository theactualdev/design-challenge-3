import './App.css'
import heroImage from './assets/hero.svg'

function App() {
  let date  = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className="content flex items-center justify-around flex-col md:flex-row pl-4">
        <div className="header">
          <h1 className='font-bold'>Just that simple</h1>
        </div>
        <div className="text md:mt-12">
          <p className='max-w-[526px] font-semibold pb-4 text-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.</p>
          <button className='bg-[#252525] text-white rounded-2xl px-8 py-4'>Get Started</button>
        </div>
      </div>
      <div className="hero-image flex items-center justify-center md:mt-[135px] mt-[50px] px-4">
        <img src={heroImage} alt="Hero Image" />
      </div>
      <footer className='bg-[#252525] text-white flex items-center justify-around'>
        <p>Copyright &copy; theactualdev { year } </p>
        <a href="https://www.figma.com/file/4UbuQuyAc6FheovBkMGNKo/50%2B-Landing-page-designs-(Community)?type=design&node-id=801-2256&mode=design">Figma</a>
      </footer>
    </>
  )
}

export default App
