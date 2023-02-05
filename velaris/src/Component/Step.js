import { Steps } from 'antd';

function Step(){
    return(
<Steps className='mt-4'
current={1}
items={[
  {
    title: 'Add user',
    
  },
  {
    title: 'Assign roles',
   
    
  },
  {
    title: 'Review & confirm',
    
  },
]}
/>
    )
}
export default Step;
