import './index.css'
import './styles/globals.css'

export function helloAnything(thing: string): string {
  return `Hello ${thing}!`
}

export { Button } from './components/button/Button';
export { Calendar } from './components/calender/Calendar'
export { Label } from './components/label/Label'
export { Input } from './components/input/Input'