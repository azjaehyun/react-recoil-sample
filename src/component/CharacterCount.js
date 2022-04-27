import {
    atom,
    selector,
    useRecoilValue,
} from 'recoil';
const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });
function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <div className='BlueColor'><div>component - 2</div>Character Count: {count}</div>;
  } 
export default CharacterCount;  