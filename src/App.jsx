import { useState , useCallback,useEffect,useRef} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow,setNumber] = useState(false);
  const [chrAllow,setChr] = useState(false);
  const [password,setPassword] = useState(false);

  const passwordRef = useRef(null)

  const passGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllow) str+="0123456789";
    if(chrAllow)  str+="!@#$%^&*(){}~?|[];'.,/<>";

    for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllow,chrAllow,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [length, numberAllow, chrAllow, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-3xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounder-lg overflow-hidden mb-4 my-3'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}>
          </input>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
             <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>[setLength(e.target.value)]}></input>
             <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={chrAllow}
              id="characterInput"
              onChange={() => {
                  setChr((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
