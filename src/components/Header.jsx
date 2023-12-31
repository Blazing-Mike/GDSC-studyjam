const Header = () => {
  return (
    <header className="flex justify-between items-center px-24 py-4 bg-lightblue">
    <img src="logo.png" alt="logo" className="w-28 h-5" />

    <div className="flex gap-5 items-center">
    <img src="notification.png" alt="notification" className="w-6 h-6"/>
    <div className="rounded-[50%] flex justify-center items-center bg-darkblue w-8 h-8 ">
      <span className="font-bold text-[10px] text-white">
      AA
      </span>
    </div>

    </div>
    </header>
    );
}
 
export default Header;