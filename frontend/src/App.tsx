import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return <div className='p-4'>
    <div className='flex gap-4 justify-end'>
      <Button variant='primary' text='Add Content' startIcon={<PlusIcon />}/>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />}/>
    </div>
    
    <div className='flex gap-4'>
      <Card type='twitter' link='https://x.com/i__vivek_07/status/1954880308039606395' title='First tweet'/>
      <Card type='youtube' link='https://www.youtube.com/watch?v=aK3iD0PT92w&list=RDaK3iD0PT92w&start_radio=1' title='First video'/>
    </div>
  </div>
}

export default App
